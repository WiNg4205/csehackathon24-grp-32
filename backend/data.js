import mongoose from 'mongoose'
const { Schema } = mongoose
const uri = `mongodb://localhost:27017/mydb`

const habitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }]
});

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }],  
  habits: {
    type: Map,
    of: new Schema({
      habitId: {
        type: Schema.Types.ObjectId,
        ref: 'Habits'
      },
      image: {
        type: String,
        required: false
      },
      streak: {
        type: Number,
        required: true
      },
      postTime: {
        type: Date,
        required: false
      }
    })
  }
});

class DatabaseHandler {
  constructor() {
    this.Users = mongoose.model('Users', userSchema);
    this.Habits = mongoose.model('Habits', habitSchema);
  }

  async connect() {
    mongoose.connect(uri);
  }

  async disconnect() {
    mongoose.disconnect()
  }

  async addUser(firstName, lastName, email, username, password) {
    const Users = mongoose.model('Users', databaseHandler.userSchema);
    const existingUser = await Users.findOne({ username: username });
    if (existingUser) {
      return false;
    }

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      friends: [],
      habits: []
    };

    const newUser = new Users(user);
    await newUser.save();

    return newUser;
  }

  async addHabit(name, description, users) {
    const Habits = mongoose.model('Habits', databaseHandler.habitSchema)
    const habit = {
      name: name,
      description: description,
      users: users
    }
    const newHabit = new Habits(habit)
    newHabit.save()
  }

  async addUserHabit(userId, habitId) {
    const Users = mongoose.model('Users', databaseHandler.userSchema)
    const user = await Users.findById(userId);
    if (!user.habits.has(habitId)) {
      const habit = {
        habitId: habitId,
        image: null,
        streak: 0,
        postTime: null
      }
      user.habits.set(habitId, habit)
      user.save()
      console.log(user)
    }
  }

  async auth(email, password) {
    const Users = mongoose.model('Users', databaseHandler.userSchema)
    const user = await Users
      .findOne({ email: email, password: password})
      .exec()
    if (user === null) {
      return false
    } else {
      return user._id.toString();
    }
  }

  async getUser(userId) {
    const Users = mongoose.model('Users', databaseHandler.userSchema)
    const user = await Users.findById(userId);
    return user
  }

  async getHabit(habitId) {
    const Habits = mongoose.model('Habits', databaseHandler.habitSchema)
    const habit = await Habits.findById(habitId);
    return habit
  }

  async addFriend(userId, friendUsername) {
    const Users = mongoose.model('Users', databaseHandler.userSchema)
    const user1 = await Users.findById(userId)
    const user2 = await Users.findOne({ username: friendUsername })

    console.log(user1)
    if (!user1.friends.some(friend => friend.userId.equals(user2._id))) {
      user1.friends.push(user2);
    }
    if (!user2.friends.some(friend => friend.userId.equals(user1._id))) {
      user2.friends.push(user1);
    }
    user1.save()
    user2.save()
  }

  async uploadStreak(userId, habitId, image) {
    // const Users = mongoose.model('Users', databaseHandler.userSchema)
    // const user = await Users.findById(userId)
    // const habit = user.habits.get(habitId);
    // console.log(habit, image)
    // habit.streak += 1;
    // habit.image = "success";
    // habit.postTime = new Date();
    // await user.save();
  }

  async hasUploadedStreak(userId, habitId) {
    const Users = mongoose.model('Users', databaseHandler.userSchema)
    const user = await Users.findById(userId);

    const habit = user.habits.find(h => h.habitId === habitId);

    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    return new Date(habit.postTime) >= twoDaysAgo;
  }
}

const databaseHandler = new DatabaseHandler()
export default databaseHandler;
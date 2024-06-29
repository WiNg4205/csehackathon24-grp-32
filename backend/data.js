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
  habits: [{
    habitId: {
      type: Number,
      required: true
    },
    images: [{
      type: String,
      required: false
    }],
    streak: {
      type: Number,
      required: true
    },
    postTime: {
      type: Date,
      required: true
    },
  }]
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
    const user = await Users.findOne({ userId: userId })
    user.habits.push(habitId)
    user.save()
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
}

const databaseHandler = new DatabaseHandler()
export default databaseHandler;
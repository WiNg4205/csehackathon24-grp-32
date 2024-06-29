import mongoose from 'mongoose'
const { Schema } = mongoose
const uri = `mongodb://localhost:27017`

class DatabaseHandler {
  static habitSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    users: [{
      type: Number,
      required: true
    }]
  });

  static userSchema = new Schema({
    userId: {
      type: Number,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
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

  async connect() {
    mongoose.connect(uri)
  }

  async addUser(userId, firstName, lastName, username, password) {
    const Users = mongoose.model('Users', databaseHandler.userSchema)
    const user = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      habits: []
    }
    const newUser = new Users(user)
    newUser.save()
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
}

const databaseHandler = new DatabaseHandler()
export default databaseHandler;
const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('DB connected')
  } catch (error) {
    throw new Error('Error with DB connection')
  }
}

module.exports = dbConnection
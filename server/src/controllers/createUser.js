const User = require('../models/userModel')

const createUser = async (username, email, password, profilePhoto) => {
  try {
    let user = await User.findOne({ email })
    if (user) {
      throw new Error('El email ya está en uso')
    }
    user = new User({
      username,
      email,
      password,
      profilePhoto
    })
    await user.save()
    return user
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = createUser
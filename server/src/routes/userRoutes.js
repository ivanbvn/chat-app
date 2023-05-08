const Router = require('express')
const createUser = require('../controllers/createUser')

const userRouter = Router()

userRouter.post('/register', async (req, res) => {
  const { username, email, password, profilePhoto } = req.body
  try {
    const user = await createUser(username, email, password, profilePhoto)
    res.status(200).json({
      ok: true,
      user
    })
  } catch (error) {
    res.status(200).json({
      ok: false,
      errorMessage: error.message
    })
  }
})

userRouter.get('/login', (req, res) => {

})


module.exports = userRouter
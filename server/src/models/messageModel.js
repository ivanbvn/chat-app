const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
  submittingUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receivingUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

module.exports = model('Message', messageSchema)
const mongoose = require('mongoose')
var DateOnly = require('mongoose-dateonly')(mongoose);
const bcrypt = require('bcrypt-nodejs')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')


var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email'
    },
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    require: true,
    default: ''
  },
  userDescription: {
    type: String,
    require: true
  },
  userTitle: {
    type: String,
    require: true
  },
  userId: {
    type: String,
    required: true
  },
  allowed: {
    type: Boolean,
    required: true,
    default: false
  },
  lock: {
    type: Boolean,
    required: true,
    default: true
  },
  newMessage: {
    type: Boolean,
    required: false,
    default: false
  },
  newNotification: {
    type: Boolean,
    required: false,
    default: false
  },
  images: {
    type: [String],
    required: false,
    default: []
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  versionKey: false,
  timestamps: true
})

UserSchema.methods.comparePassword = function (passwordAttempt, cb) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
    err ? cb(err) : cb(null, isMatch)
  )
}
UserSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', UserSchema)

const controller = require('../controllers/video')
const validate = require('../controllers/video.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')


/*
 * Uplaod video
 */
// router.post('/uplaodVideo',validate.uplaodVideo, controller.uplaodVideo)
router.post('/uplaodVideo',trimRequest.all,requireAuth, controller.uplaodVideo)
module.exports = router

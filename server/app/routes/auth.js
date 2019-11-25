const controller = require('../controllers/auth')
const validate = require('../controllers/auth.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')
/**
* @swagger
{
	"/api/user/login": {
		"post": {
			"tags": ["User"],
			"name": "User Login",
			"summary": "User Login",
			"consumes": [
				"application/json"
			],
			"parameters": [
				{
					"in": "body",
					"name": "body,",
					"schema": {
						"$ref": "#/",
						"type": "object",
						"properties": {
							"email": {
								"value": "subhajit601@gmail.com",
								"type": "string"
							},
							"password": {
								"type": "string",
								"format": "password",
								"value": 123456
							}
						}
					},
					"required": [
						"email",
						"password"
					]
				}
			],
			"responses": {
				"200": {
					"description": "User found and logged in successfully."
				},
				"400": {
					"description": "Wrong requested parameter, Username and password don't match."
				},
				"401": {
					"description": "Unauthorize user, Wrong token, token mismatch."
				}
			}
		}
	}
}
*/




/*
 * Register route
 */
router.post(
  '/signUp',
  trimRequest.all,
  validate.signUp,
  controller.signUp
)

/*
 * Get new refresh token
 */
router.get(
  '/token',
  requireAuth,
  AuthController.roleAuthorization(['user', 'admin']),
  trimRequest.all,
  controller.getRefreshToken
)
/*
 * check test mail
 */
router.post(
  '/email',
  controller.sendMail
)
module.exports = router

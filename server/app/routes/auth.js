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
	"/signIn": {
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
					"name": "body",
					"schema": {
						"$ref": "#/",
						"type": "object",
						"properties": {
							"userEmail": {
								"value": "akp@dummy.com",
								"type": "string"
							},
							"userPassword": {
								"type": "string",
								"format": "password",
								"value": 123456
							}
						}
					},
					"required": [
						"userEmail",
						"userPassword"
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

/**
* @swagger
{
	"/signUp": {
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
					"name": "body",
					"schema": {
						"$ref": "#/",
						"type": "object",
						"properties": {
							"name": {
								"value": "User name",
								"type": "string"
							},
							"email": {
								"value": "akp@dummy.com",
								"type": "string"
							},
							"password": {
								"type": "string",
								"format": "password",
								"value": 123456
							},
							"userDescription": {
								"value": "Description",
								"type": "string"
							},
							"userTitle": {
								"value": "Title",
								"type": "string"
							},							
							"userId": {
								"value": "user id",
								"type": "string"
							},
						}
					},
					"required": [
						"name",
						"email",
						"password",
						"userDescription",
						"userTitle",
						"userId"
					]
				}
			],
			"responses": {
				"200": {
					"description": "Sign up successfully."
				},
				"400": {
					"description": "Invalid Parameters"
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
 * Login route
 */
router.post('/signIn', trimRequest.all, validate.userSignIn, controller.userSignin)
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

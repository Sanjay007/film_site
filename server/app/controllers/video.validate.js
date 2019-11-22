const {
    validationResult
  } = require('../middleware/utils')
  const {
    check,body
  } = require('express-validator')
  
  
  exports.uplaodVideo = [
    check('title')
    .exists()
    .withMessage('Title is required')
    .not()
    .isEmpty()
    .withMessage('Title cannot be blank'),

    // check('videoFile')
    // .exists()
    // .withMessage('Video File Required')
    // .not()
    // .isEmpty()
    // .withMessage('Video Required'),

    // check('description')
    // .exists()
    // .withMessage('Description is required')
    // .not()
    // .isEmpty()
    // .withMessage('Description cannot be blank'),

    // check('category')
    // .exists()
    // .withMessage('category is required')
    // .not()
    // .isEmpty()
    // .withMessage('category cannot be blank'),

    // check('genere')
    // .exists()
    // .withMessage('Genere is required')
    // .not()
    // .isEmpty()
    // .withMessage('Genere cannot be blank'),


    // check('rating')
    // .exists()
    // .withMessage('Rating required')
    // .not()
    // .isEmpty()
    // .withMessage('Rating cannot be blank'),

    // check('hide')
    // .exists()
    // .withMessage('hide required')
    // .not()
    // .isEmpty()
    // .withMessage('hide cannot be blank'),

    // check('series')
    // .exists()
    // .withMessage('series required')
    // .not()
    // .isEmpty()
    // .withMessage('series cannot be blank'),

    // check('userId').optional(),
    // check('poster').optional(),

    // check('posterFile')
    // .exists()
    // .withMessage('Poster File required')
    // .not()
    // .isEmpty()
    // .withMessage('Poster File cannot be blank'),
    
  
    (req, res, next) => {
      validationResult(req, res, next)
    }
  ]
  
  
  /**
   * Validates login request
   */
  exports.userSignIn = [
    check('userEmail')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
    check('userPassword')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    (req, res, next) => {
      validationResult(req, res, next)
    }
  ]
  
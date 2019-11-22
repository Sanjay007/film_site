const videos = require('../models/video')
const uuid = require('uuid')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const emailer = require('../middleware/emailer')
const multer = require('multer');
const path = require('path');
const destPath = {
    video: "public/uploads/videos",
    poster: "public/uploads/poster"
} 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(file.fieldname == 'videoFile'){
        cb(null, destPath.video)
    }
    if(file.fieldname == 'posterFile'){
        cb(null, destPath.poster)
    }
    
  },
  filename: function (req, file, cb) {
    if(file.fieldname == 'videoFile'){        
        cb(null, uuid.v4()+ path.extname(file.originalname))
    }
    if(file.fieldname == 'posterFile'){
        cb(null, uuid.v4()+path.extname(file.originalname))
    }
    
  }
})
var uplaod = multer({ storage: storage }).fields([{
    name: 'videoFile', maxCount: 1
  }, {
    name: 'posterFile', maxCount: 1
  }]);
/*********************
 * Private functions *
 *********************/

const saveUplaodedResponse = async req => {  
  return new Promise((resolve, reject) => {
    const video = new videos({
     // videoId: req.body.videoId,
      title:req.body.title,
      category: req.body.category,
      description: req.body.description,  
      genere: req.body.genere, 
      rating: req.body.rating,
      film_name:req.body.film_name,
      video: req.files.videoFile[0].filename,
      poster: req.files.posterFile[0].filename,      
      comments: [],
      hide: false,
      disabled: false,
      allowed: true, // for now true default will be false
      likes: [],
      series: false,
      is_featured:false,
      userId: req.user._id
    })    
    video.save((err, item) => {
      if (err) {
        reject(utils.buildErrObject(422, err.message))
      }
      resolve(item)
    })
  }).catch(err => console.log(err))
  

}

exports.uplaodVideo = async (req, res) => {
  try {
    var requestBody = [];
    //req = matchedData(req);
    uplaod(req, res,  function (err) {
      if (err) {
        utils.handleError(res, err)
      }
     saveUplaodedResponse(req)     
    });  

   
    utils.handleSuccess(res, [], "video uplaoded");
  } catch (error) {
    utils.handleError(res, error)
  }
}


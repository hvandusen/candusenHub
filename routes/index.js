var express = require('express');
var Work = require('../models/work');
var router = express.Router();
var urls = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'candusen hub!!!' });
});

router.post('/add', function(req, res, next) {
  newImage = req.body.url
  pic = new Work({
    name: (req.body.name !=='enter a title!' ? req.body.name : ''),
    img_url: newImage,
    width: req.body.width,
    height : req.body.height
  });
  pic.save(function(err,pic){
        //res.render('list', { title: 'candusen bub',urls: urls });
        res.redirect('/list');
  });
});

router.get('/list',function(req,res,next){
  //Work.find().sort({approvals: -1}),function(err,docs){
    //urls = docs
  //});

    Work.find(function(err,docs){
      //get all tha pictures dude!!
      urls = docs
      res.render('list', { title: 'candusen hub!!!',urls: urls,request: req });
    }).sort({approvals:-1});

});
module.exports = router;

var express = require('express');
var Work = require('../models/work');
var router = express.Router();
var urls = [];
Work.find(function(err,docs){
  urls = docs;
}).sort({approvals:-1});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'candusen hub!!!' });
});
//
router.post('/list', function(req, res, next) {
  newImage = req.body.url
  pic = new Work({
    name: (req.body.name !=='enter a title!' ? req.body.name : ''),
    img_url: newImage,
    width: req.body.width,
    height : req.body.height
  });


  pic.save(function(err,pic){
    Work.find(function(err,docs){
      urls = docs;
      res.redirect('/hub/list');
    }).sort({approvals:-1});

  });
});


router.get('/list',function(req,res,next){
  //Work.find().sort({approvals: -1}),function(err,docs){
    //urls = docs
  //});
  //res.render('list', { title: 'candusen hub!!!',urls: urls,request: req });

    Work.find(function(err,docs){
      //get all tha pictures dude!!
      urls = docs
      res.render('list', { title: 'candusen hub!!!',urls: urls,request: req });
    }).sort({approvals:-1});
});

router.post('/approval/:workid',function(req,res,done){
  Work.update({_id:req.params.workid},{'$inc':{approvals:1}},function(err,doc){
    //done()
    res.render('list', { title: 'candusen hub!!!',urls: urls,request: req });
  });

});

router.post('/approval',function(req,res,done){
  });


module.exports = router;

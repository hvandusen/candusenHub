var express = require('express');
var router = express.Router();
var urls = [];

var Work = require('../models/work');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'candusen hub!!!' });
});

/*router.get('/add', function(req, res, next) {
  //
  Work.find(function(err,docs){
    //get all tha pictures dude!!
    urls = []
    docs.forEach(function(doc) {
      //do something with each picture in the db
        urls.push(doc);
        console.log('zzdzz')
        console.dir(doc)
      //  console.dir(doc.img_url)
      res.render('add', { title: 'candusen bub',urls: urls });
      });
  });
  res.render('add', {title: 'candusen bub', urls: urls });
});*/

router.post('/add', function(req, res, next) {
  console.log('dikelob')
  console.log(req.body.title)
  newImage = req.body.url
  pic = new Work({
    name: (req.body.name !=='enter a title!' ? req.body.name : ''),
    img_url: newImage,
    width: req.body.width,
    height : req.body.height
  });
  pic.save(function(err,pic){
    Work.find(function(err,docs){
      //get all tha pictures dude!!
      urls = docs
        //res.render('list', { title: 'candusen bub',urls: urls });
        console.log('dikelob')
        console.dir(urls[0])
        res.redirect('/list');
      });
  });
});

router.get('/list',function(req,res,next){
  res.render('list', { title: 'candusen hub!!!',urls: urls });
})


module.exports = router;

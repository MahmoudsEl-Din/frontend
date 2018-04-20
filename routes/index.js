var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/process', function(req, res){
  console.log(req.body.id);
  console.log(req.body.rating);
  var return_string = '/profile/'.concat(req.body.id)
  res.redirect(303, return_string);
});

router.post('/message', function(req, res){
    console.log(req.body.from);
    console.log(req.body.to);
    console.log(req.body.content);
    var return_string = '/chat/'.concat(req.body.to)
    res.redirect(303, return_string);
});

router.get('/', function(req, res) {
    res.render("login");
});

router.get('/forget', function(req, res) {
    res.render("forget_pwd");
});

router.get('/signup', function(req, res) {
    res.render("signup");
});

router.get('/resultgrid', function(req, res) {
    res.render("resultgrid");
});

router.get('/search', function(req, res) {
    res.render("search");
});

router.get('/profile/:key?', function(req, res) {
  var id = req.params.key;
  var type;
  var name;
  var gender;
  var age;
  var email;
  var address;
  var contact;
  var action;
  var skill;
  var intro;
  var rating;
  var ratnum;
  if(id=="1"){
    type="Mentor";
    name="Sicong Hu";
    gender="Male";
    age="20";
    email="sicong@gmail.com";
    address="1 Java Road, Python Hill";
    contact="0426888888";
    action="Teach";
    skill="python, java, sql";
    intro="I'm a student from Melbourne University and I'm glad to share my knowledge with other people.";
    rating="4.5";
    ratnum="18"
  }
  else {
      type = "Mentee";
      name = "Ada Brown";
      gender = "Female";
      age = "60";
      email = "ada@gmail.com";
      address = "1 Php Street, Mount Javascript";
      contact = "0479888888";
      action = "Learn";
      skill = "photoshop, baking";
      intro = "I'm glad to learn new knowledge.";
      rating = "4.3";
      ratnum = "12";
  }
  res.render('profile', { id:id, type:type, name:name, gender:gender, age:age, email:email, address:address, contact:contact,
      action:action, skill:skill, intro:intro, rating:rating, ratnum:ratnum});
});

router.get('/chat/:key?', function(req, res) {
  var id = req.params.key;
  var user = 10;
  var name;
  var type;
  var block;
  if(id=="1"){
        type="Mentor";
        name="Sicong Hu";
   }
   else {
        type = "Mentee";
        name = "Ada Brown";
    }
    block = [["message","11:00","How are you today?"],["message send","11:05","I'm fine, thank you!"],
        ["message","11:00","How are you today?"],["message send","11:05","I'm fine, thank you!"],
        ["message","11:00","How are you today?"],["message send","11:05","I'm fine, thank you!"],
        ["message","11:00","How are you today?"],["message send","11:05","I'm fine, thank you!"],
        ["message","11:00","How are you today?"],["message send","11:05","I'm fine, thank you!"]];
  res.render('chat', { id:id, user:user, type:type, name:name, block:block});
});

module.exports = router;

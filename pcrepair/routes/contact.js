var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");


//TODO : use username and password here

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
        user: "",
        pass: ""
     }
 });



router.get('/', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});



router.post('/send', function(req, res, next) {

  console.log('SMTP Configured');
 
  var mailOptions = {
    from: ' "' + req.body.name + '"' +  req.body.email,
    to:  'pcrepairhelp@mailinator.com',
    subject: 'To repair '   , // Subject line
    text: 'You have a submission from ....  Name' + req.body.name,
    html: '<p> You have a submission from ....  <ul> <li>Name : ' + req.body.name + '  </li> <p> regarding ,  <li>'+ req.body.message +'<li></ul>'
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
    res.redirect('/');
 });





 console.log('SMTP Configured');


//   transporter.sendMail(mailOptions, (err, info) => {
//     console.log('User : ' + JSON.stringify(req.body), req.body.name);
//     if (error)
//       return console.log(error);
//     console.log('Message sent : ' + info.response);
//     
//   });
});

module.exports = router;

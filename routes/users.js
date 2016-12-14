var express = require('express');
var router = express.Router();
var service = require('../services/DataServices.js');

/* GET users listing. */
router.get
('/', function(req, res, next) 
    {
       console.log("↓↓↓↓ Getting User lists ↓↓↓↓");
      // geting user list from data Service
      service.getAllUsers().then
        (
            function (list) 
            {
              console.log(list);
              //render userlist view with list if users found
              res.render('userlist', { "userlist": list });
            },
            function (err) 
            {
              console.error('Something went wrong:', err);
              res.send("There was a problem getting users from the database. " + err);
            }
        );
  //res.send('respond with a resource');
    }
);

/* GET New User page. */
router.get('/newuser', function (req, res) {
  res.render('newuser', { title: 'Add New User' });
});
 
/* POST to Add User Service */
router.post('/adduser', function (req, res) {
  console.log("↓↓↓↓ Add New User ↓↓↓↓");  
  // Get our form values. These rely on the "name" attributes   
  var user = {
    "username": req.body.username,
    "email": req.body.useremail
  };
  service.addUser(user)
    .then(
      function (result) { console.log(result); res.redirect("/users"); },
      function (err) {
        console.error('Something went wrong:', err);
        res.send("There was a problem adding the information to the database. " + err);
      }
      );
});
module.exports = router;
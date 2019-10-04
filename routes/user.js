
var express = require('express');
var router = express.Router();
let dbconfig=require('../dbconfig/db-connect');
let bcrypt=require('bcrypt-nodejs');

/*let csrf=require('csurf');
let csrfProtection=csrf();
router.use(csrfProtection);
*/


router.get('/signup',function (req,res) {
    res.render('user/signup',{csrfToken:req.csrfToken});

})


router.post('/signup',function (req,res) {


    console.log(req.body.email);
    let password=req.body.password;
    let encryptedPassword=bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);

    let db=dbconfig.get();
    db.collection('user').insertOne({email:req.body.email,password:encryptedPassword},function (err,data) {
        if(!err){
            res.redirect('/')
        }

    })


});
router.get('/signin',function (req,res) {
    res.render('user/signin',{csrfToken:req.csrfToken});

})

router.post('/signin',function (req,res) {
    let username=req.body.email;
    let password=req.body.password;


    dbconfig.get().collection('user').findOne({"email":username},function (err,data) {
        if(data){
            console.log(data);
            if(bcrypt.compareSync(password,data.password)){
                res.redirect('/user/profile')
            }else{
                res.end('Wrong Password')
            }

        }else{
            res.end('Username and Password Are Wrong')
        }


    })



})
 router.get('/profile',function (req,res) {
     res.render('user/profile');

 })
module.exports = router;


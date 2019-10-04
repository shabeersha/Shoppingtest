let express = require('express');
let router = express.Router();
let dbconfig=require('../dbconfig/db-connect');

router.get('/seeder',function (req,res,next) {
    res.render('adminDash/seeder');
});

router.post('/seeder',function (req,res,next) {

    dbconfig.connect(function (err) {
    if(err){
        console.log("connection error");
        process.exit(1);
    }
    else{
        console.log("connected successfully");

        dbconfig.get().collection('product').insertOne({
            imagepath:req.body.imagepath,
            title:req.body.title,
            description:req.body.description,
            price:req.body.price
        },function (err,data) {
            if(!err){
                res.redirect('/');
                console.log("Successfully Pushed to Db...");
            }});
    }
});
});

module.exports = router;
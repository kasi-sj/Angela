const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("listening to port 3000");
})

app.get("/" , function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    b*=2;
    res.send(`your bmi is : `+(a/b));
})


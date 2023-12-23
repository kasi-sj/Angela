const express = require("express");
const app = express();


app.listen(3000 , function(){
    console.log("listining to 3000");
});

app.get("/" , function(req,res){
    res.send("<h1>hello<h1>");
})

app.get("/about",function(req,res){
    res.send("<h1>name : kasi nathan<h1>");
})

app.get("/about3",function(req,res){
    res.send("<h1>node 3<h1>");
})
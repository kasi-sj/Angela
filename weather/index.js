const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("listen to 3000");
})

app.get("/" , function(req,res){
    res.sendFile(__dirname+"/index.html");
})



app.post("/",function(req,res){
    var place = req.body.place;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid=4369b33e3c184ac1c8370d246c8d2cc1";
    console.log(url);
    https.get(url,  function (response) {
        response.on("data",function(data){
            var jj = JSON.parse(data);
            var type = jj.weather[0].main;
            var temp = jj.main.temp;
            var pre = jj.main.pressure;
            var hum = jj.main.humidity;
            var img = jj.weather[0].icon;
            // $("#type").text("type        :"+type);
            // $("#temp").text("temperature :"+temp);
            // $("#pre").text("pressure     :"+pre);
            // $("#hum").text("humidity     :"+hum);
            res.write("<h1>The current weather is "+type+" in "+place+"</h1>");
            res.write("<p>temperature : "+temp+" </p>")
            res.write("<p>pressure    : "+pre+" </p>")
            res.write("<p>humidity    : "+hum+" </p>")
            res.write("<img src='https://openweathermap.org/img/wn/"+img+"@2x.png' alt=''>");
            res.send();
        });
    });
})
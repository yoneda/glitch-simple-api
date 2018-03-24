var express = require('express');
var app = express();

var under_floor = function(value,n){
  var result = Math.floor(value*Math.pow(10,n))/Math.pow(10,n);
  return result
}

// app.set("port",(process.env.PORT || 3000));

// CORS を許可する
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/",function(req,res){
  var man = Math.random();
  var women = 1.0 - man;
  man = under_floor(man,2);
  women = under_floor(women,2);
  var gender = -1;
  if(man>=women){ gender=0 }
  else if(man<women){ gender=1 }
  var resultJSON = {
    "gender":gender,
    "per":{
      "man":man,
      "women":women
    }
  }
  res.json(resultJSON);
})

app.listen(process.env.PORT ,function(){
  console.log("runing on " + process.env.PORT);
});

var express = require('express');
var app = express();

var under_floor = function(value,n){
  var result = Math.floor(value*Math.pow(10,n))/Math.pow(10,n);
  return result
}

app.get("/",function(req,res){
  var man = Math.random();
  var women = 1.0 - man;
  man = under_floor(man,2);
  women = under_floor(women,2);
  res.json({"foo":"bar"});
})

app.listen(3000);

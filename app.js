var express = require('express');

app.get("/",function(req,res){
  res.json({"foo":"bar"});
})

app.listen(3000);

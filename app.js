var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.json({
        "Valor": "Gabriel"
    });
});
app.listen(3000,function(){
    console.log("servidor rodando");
});
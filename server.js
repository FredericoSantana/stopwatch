const express = require('express');
const app = express();

app.set("view engine", "ejs");


// Criação das rotas
app.get("/", function(req, res){
    res.render("index");
})

app.get("/sobre", function(req, res){
    res.render("about");
})

app.get("/tempo", function(req, res){
    res.render("time");
})

// Executar o servidor na porta 8080
app.listen(8080);
console.log("rodando");
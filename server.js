const express = require('express');
const app = express();

//Usando template engine
app.set("view engine", "ejs");


// Criação das rotas
app.get("/", function(req, res){
    res.render("pages/index");
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.get("/tempo", function(req, res){
    res.render("pages/time");
})

// Executar o servidor na porta 8080
app.listen(8080);
console.log("rodando");
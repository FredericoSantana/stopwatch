const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

//Usando template engine
server.set("view engine", "ejs")

//Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos estáticos(statics)
server.use(express.static("public"))

server.use(routes)

// Executar o servidor na porta 8080
server.listen(8080, () => console.log('rodando'))
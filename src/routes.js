const express = require('express');
const routes = express.Router()

const basePath = __dirname + "/views"

// Criação das rotas
routes.get("/", (request, response) => response.sendFile(basePath + "/index.html"))

module.exports = routes;
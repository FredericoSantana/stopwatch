const express = require('express');
const routes = express.Router()

const views = __dirname + "/views/"

// Criação das rotas
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/tempo', (req, res) => res.render(views + "time"))
routes.get('/sobre', (req, res) => res.render(views + "about"))



module.exports = routes;
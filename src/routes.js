const express = require('express');
const routes = express.Router()

// Criação das rotas
routes.get('/', (req, res) => res.render("index"))
routes.get('/tempo', (req, res) => res.render("time"))
routes.get('/sobre', (req, res) => res.render("about"))

module.exports = routes;
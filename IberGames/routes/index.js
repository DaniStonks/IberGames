"use strict";

const express = require('express');
const router = express.Router();
const mysql = require("mysql2");
const options = require("../config/options.json");

/* Obtém a página inicial. */
router.get("/", function (req, res) {
  res.render("index");
});


router.get('/forum', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query(
    'SELECT Cat_nome, Cat_desc FROM Categoria',
    function (err, rows, fields) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("forum", {
          categorias : rows
        });
      }
  });
  connection.end();
});

router.get('/categories/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query(
    'SELECT Nome, Conteudo, Categoria, Votos FROM viewPosts WHERE Categoria = "' + req.params.slug + '"',
    function (err, rows, fields) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("posts", {
          posts : rows
        });
      }
  });
  connection.end();
});

router.get('/posts/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  let slug = req.params.slug.replace(/-/g, ' ');
  connection.connect();
  connection.query(
    'SELECT Criador, Conteudo, Jogo, Data '
    + 'FROM viewComentarios '
    + 'WHERE Jogo = "' + slug + '" '
    + 'ORDER BY Data ASC',
    function (err, rows, fields) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("comments", {
          comentarios : rows,
          jogo : slug
        });
      }
  });
  connection.end();
});

router.get("/login", function (req, res) {
  res.render("login");
});

module.exports = router;
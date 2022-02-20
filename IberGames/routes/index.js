"use strict";

const express = require('express');
const connection = require('../public/scripts/sql-connection');
const router = express.Router();
const requestHandlers = require("./request-handlers");

/* Obtém a página inicial. */
router.get("/", function (req, res) {
  res.render("index");
});


router.get('/forum', function (req, res) {
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
});

router.get('/forum/:slug', function (req, res) {
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
});

router.get("/login", function (req, res) {
  res.render("login");
});

// People
router.get("/category", requestHandlers.getCategories);

module.exports = router;
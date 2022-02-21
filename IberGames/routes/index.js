"use strict";

const express = require('express');
const router = express.Router();
const mysql = require("mysql2");
const options = require("../config/options.json");

/* Obtém a página inicial. */
router.get("/", function (req, res) {
  res.render("index", {
    user: req.user
  });
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
          categorias: rows,
          user: req.user
        });
      }
    });
  connection.end();
});

router.get('/categories/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query(
    'SELECT * FROM viewPosts WHERE Categoria = "' + req.params.slug + '"',
    function (err, rows, fields) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("posts", {
          posts: rows,
          user: req.user
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
    'SELECT * FROM viewComentarios WHERE Jogo = "' + slug + '" ORDER BY Data ASC',
    function (err, rows, fields) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("comments", {
          comentarios: rows,
          jogo: slug,
          user: req.user
        });
      }
    });
  connection.end();
});

router.get("/new-comment", function (req, res) {
  res.render("new-comment", {
    user: req.user
  });
});

router.get("/new-post", function (req, res) {
  res.render("new-post", {
    user: req.user
  });
});

router.get("/new-category", function (req, res) {
  res.render("new-category", {
    user: req.user
  });
});

router.get("/edit-category", function (req, res) {
  res.render("edit-category", {
    user: req.user
  });
});

router.get("/search", function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  let searchTerm = req.query.search;
  connection.connect();
  connection.query(
    'SELECT * FROM viewPosts WHERE Nome LIKE "%' + searchTerm + '%"', function (err, rows) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("posts", {
          posts: rows,
          user: req.user
        });
      }
    });
  connection.end();
});

module.exports = router;
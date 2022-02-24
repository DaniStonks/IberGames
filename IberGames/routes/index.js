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

/* Obtém a página de reviews. */
router.get("/reviews", function (req, res) {
  res.render("reviews", {
    user: req.user
  });
});

/* Obtem a pagina inicial do forum, que contem as categorias */
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

/* Obtem a pagina de posts para uma determinada categoria */
router.get('/categories/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  req.session.current_category = req.params.slug;
  connection.connect();
  connection.query(
    'SELECT * FROM viewPosts WHERE Categoria = ? '
    + ' ORDER BY Nome ASC',[ req.params.slug ],
    function (err, rows, fields) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("posts", {
          posts: rows,
          user: req.user,
        });
      }
    });
  connection.end();
});

/* Obtem a pagina de comentarios de um determinado jogo */
router.get('/posts/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  req.session.current_game = req.params.slug;
  let slug = req.params.slug.replace(/-/g, ' ');
  connection.connect();
  connection.query(
    'SELECT * FROM viewComentarios WHERE Jogo = "' + slug + '" ORDER BY Data ASC',
    function (err, rows) {
      if (err) {
        console.log(err.message);
      }
      else {
        console.log(rows);
        res.render("comments", {
          comentarios: rows,
          jogo: slug,
          user: req.user
        });
      }
    });
  connection.end();
});

/* Obtem a pagina para adicionar um novo comentario */
router.get("/new-comment", function (req, res) {
  res.render("new-comment", {
    user: req.user,
    game: req.session.current_game
  });
});

/* Obtem a pagina para adicionar um novo post */
router.get("/new-post", function (req, res) {
  res.render("new-post", {
    user: req.user,
    category: req.session.current_category
  });
});

/* Obtem a pagina para adicionar uma nova categoria */
router.get("/new-category", function (req, res) {
  res.render("new-category", {
    user: req.user
  });
});

/* Obtem a pagina para editar uma determinada categoria */
router.get("/edit-category/:slug", function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  let categoryName = req.params.slug.toUpperCase()
  connection.connect();
  connection.query(
    'SELECT Cat_desc FROM categoria WHERE Cat_nome = "' + categoryName + '"',
    function (err, rows) {
      if (err) {
        console.log(err.message);
      }
      else {
        req.session.edit_cat_name = categoryName;
        req.session.edit_cat_body = rows[0].Cat_desc;

        res.render("edit-category", {
          user: req.user,
          catName: categoryName,
          catBody: rows[0].Cat_desc
        });
      }
    });
  connection.end();
});

/* Obtem a pagina para moderação dos utilizadores do forum */
router.get("/user-moderation", function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query(
    'SELECT * FROM Registado WHERE Regist_name != ?',[
      req.user[0].Regist_name
    ],function (err, rows) {
      if (err) {
        console.log(err.message);
      }
      else {
        res.render("user-moderation", {
          users: rows,
          user: req.user
        });
      }
    });
  connection.end();
});

/* Devolve uma pagina com todos os posts relacionados com o termo de pesquisa */
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
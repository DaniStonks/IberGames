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

/* Cria uma categoria e mostra a pagina */
router.post('/forum', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL createCategoria(?, ?)', [
    req.body.categoryName,
    req.body.categoryBody,
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/forum");
  });
  connection.end();
});

/* Atualiza uma categoria e mostra a pagina */
router.post('/forum/edit', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('UPDATE categoria SET Cat_nome = ?, Cat_desc = ? '
  + 'WHERE Cat_nome = ? AND Cat_desc = ?',[
    req.body.categoryName,
    req.body.categoryBody,
    req.session.edit_cat_name,
    req.session.edit_cat_body
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/forum");
  });
  connection.end();
});

/* Obtem a pagina de posts para uma determinada categoria */
router.get('/categories/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  req.session.current_category = req.params.slug;
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
          user: req.user,
        });
      }
    });
  connection.end();
});

/* Adiciona um post a uma determinda categoria e mostra a pagina */
router.post('/categories/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL createPost(?, ?, ?, ?)', [
    req.user[0].Regist_name,
    req.body.postTitle,
    req.body.postBody,
    req.session.current_category.replace(/-/g, ' ')
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/categories/" + req.params.slug);
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
        res.render("comments", {
          comentarios: rows,
          jogo: rows[0].Jogo,
          user: req.user
        });
      }
    });
  connection.end();
});

/* Adiciona um comentario ao post sobre um jogo e mostra a pagina */
router.post('/posts/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL createComment(?, ?, ?)', [
    req.user[0].Regist_name,
    req.body.commentBody,
    req.session.current_game.replace(/-/g, ' ')
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/posts/" + req.params.slug);
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
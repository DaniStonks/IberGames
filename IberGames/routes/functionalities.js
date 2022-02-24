"use strict";

const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const mysql = require("mysql2");
const options = require("../config/options.json");

/* Cria uma categoria e mostra a pagina */
router.post('/forum', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  console.log(req.body);
  connection.query('CALL createCategoria(?, ?)', [
    req.body.categoryName,
    req.body.categoryBody,
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect(303,"/forum");
  });
  connection.end();
});

/* Atualiza uma categoria e mostra a pagina */
router.post('/forum/edit', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('UPDATE categoria SET Cat_nome = ?, Cat_desc = ? '
    + 'WHERE Cat_nome = ? AND Cat_desc = ?', [
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

/* Adiciona um comentario ao post sobre um jogo e mostra a pagina */
router.post('/posts/:slug', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  if( typeof req.user == 'undefined'){
    connection.query('CALL createComment(?, ?, ?)', [
      '',
      req.body.commentBody,
      req.session.current_game.replace(/-/g, ' ')
    ], function (err) {
      if (err) { return console.log(err); }
      res.redirect("/posts/" + req.params.slug);
    });
    connection.end();
  }
  else{
    connection.query('CALL createComment(?, ?, ?)', [
      req.user[0].Regist_name,
      req.body.commentBody,
      req.session.current_game.replace(/-/g, ' ')
    ], function (err) {
      if (err) { return console.log(err); }
      res.redirect("/posts/" + req.params.slug);
    });
    connection.end();
  }
});

/* Faz um upvote num determinado post */
router.post('/upvote', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL votarEmPost("U", ?, ?)', [
    req.user[0].Regist_name,
    req.body.game
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/categories/" + req.session.current_category);
  });
  connection.end();
});

/* Faz um upvote num determinado post */
router.post('/downvote', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL votarEmPost("D", ?, ?)', [
    req.user[0].Regist_name,
    req.body.game
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/categories/" + req.session.current_category);
  });
  connection.end();
});

/* O utilizador escolhido é banido */
router.post('/ban', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL banirUtilizador(?)', [
    req.body.username
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/user-moderation");
  });
  connection.end();
});

/* O utilizador escolhido é desbanido */
router.post('/unban', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL desbanirUtilizador(?)', [
    req.body.username
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/user-moderation");
  });
  connection.end();
});

/* Apaga um comentario */
router.post('/delete-comment', function (req, res) {
  let connection = mysql.createConnection(options.mysql);
  let game = req.session.current_game.replace(/-/g, ' ');
  connection.connect();
  connection.query('CALL deleteComment(?, ?, ?, ?)', [
    req.body.username,
    req.body.content,
    game,
    req.body.creationDate
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/posts/"+game);
  });
  connection.end();
});

module.exports = router;
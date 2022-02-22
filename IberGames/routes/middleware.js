"use strict";

const express = require('express');
const router = express.Router();
const mysql = require("mysql2");
const options = require("../config/options.json");
  
router.post('/posts/:slug', function (req, res, next) {
    let connection = mysql.createConnection(options.mysql);
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
    next();
  });
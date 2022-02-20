"use strict";

const express = require('express');
const connection = require('../public/scripts/sql-connection');
const router = express.Router();
const requestHandlers = require("./request-handlers");

/* Obtém a página inicial. */
router.get("/", function (req, res) {
  res.render("index");
});

var categorias = [];

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

/*
function replaceChilds(id, newSon) {
  let no = document.getElementById(id);
  while (no.hasChildNodes()) {
      no.removeChild(no.lastChild);
  }
  no.appendChild(newSon);
};

/**
* Função que recebe um qualquer objeto e retorna dinamicamente uma linha de tabela HTML com informação relativa ao estado das suas propriedades
* @param {Object} object - objecto do qual vamos transformar o conteudo dos seus atributos em linhas
* @param {boolean} headerFormat - controla de o formato é cabeçalho ou linha normal
function categoryListChild(category) {
  let li = document.createElement("li");
  let anchor = document.createElement("a");
  let paragraph = document.createElement("p");

  anchor.textContent = category.name;
  paragraph.textContent = category.description;

  li.appendChild(anchor);
  li.appendChild(paragraph);
  return li;
};

Information.prototype.showCategories = function () {
  let categoriesList = document.getElementById("categories");
  this.category.forEach(category => categoriesList.appendChild(categoryListChild(category)));
  //replaceChilds(this.id, table);
};
*/

router.get("/login", function (req, res) {
  res.render("login");
});

// People
router.get("/category", requestHandlers.getCategories);

module.exports = router;
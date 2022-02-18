"use strict";

const express = require('express');
const router = express.Router();
const requestHandlers = require("./request-handlers");

/* Obtém a página inicial. */
router.get("/", function(req, res) {
    res.render("news");
  });

/* Obtém a página inicial do forum.
router.get('/forum-categories', function(req, res) {
    var myBooks = [];
    var mySpeakers = [];
    mySpeakers = appdata.speakers;
  
    appdata.speakers.forEach(function(item) {
      myBooks = myBooks.concat(item.books);
    });
    res.render('speakers', {
      title: 'Speakers',
      books: myBooks,
      speakers: mySpeakers,
      page: 'speakersList'
    });
});
*/

router.get('/forum-categories', function(req, res) {
    res.render("forum-categories");
});

// People
router.get("/category", requestHandlers.getCategories);

module.exports = router;
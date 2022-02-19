"use strict";

const express = require('express');
const router = express.Router();
const requestHandlers = require("./request-handlers");

/* Obtém a página inicial. */
router.get("/", function(req, res) {
    res.render("index");
});

/* Obtém a página inicial do forum.

router.get("/", function(req, res) {
    res.render("index",{
      title: "neps"
    });
});

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

exports.getIndexPage = async (req, res) => {
  // Query the Database for all the Posts in the DB
  const postsPromise = await Post.find().sort({ created: -1 }).populate('author').skip(skip)
    .limit(limit);
  const countPromise = await Post.count();
  const [posts, count] = await Promise.all([postsPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!posts.length && skip) {
    res.redirect(`/posts/page/${pages}`);
  } else {
    res.render('index', {
      title: 'Home Page',
      posts,
      page,
      pages,
      count,
      pageTitle: 'Lastest Posts',
    });
  }
};

router.get("/login", function(req, res){
  res.render("login");
});

// People
router.get("/category", requestHandlers.getCategories);

module.exports = router;
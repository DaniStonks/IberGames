var http = require("http");
var path = require("path");
var logger = require("morgan");
var passport = require("passport");
var session = require("express-session");
var express = require("express");
var bodyParser = require("body-parser");

var mysql = require('mysql2/promise');
var MySQLStore = require('express-mysql-session')(session);
var options = require("./config/options.json");

var routes = require("./routes/index");
var authRoutes = require("./routes/auth");

var app = express();
var connection = mysql.createPool(options.mysql);
var sessionStore = new MySQLStore({}, connection);

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));
app.use(passport.authenticate('session'));


app.use("/", routes);
app.use("/", authRoutes);

/*
app.get("/novo-comentario", function(req, res) {
  res.render("novo-comentario");
});

app.post("/novo-comentario", function(req, res) {
  if (!req.body.title || !req.body.body) {
    res.status(400).send("Os comentários no Livro de Visitas devem de possuir um título e um corpo.");
    return;
  }
  comentarios.push({
    title: req.body.title,
    body: req.body.body,
    published: new Date()
  });
  res.redirect("/");
});
*/

app.use(function(req, res) {
  res.status(404).render("404");
});

http.createServer(app).listen(8888, function() {
  console.log("Aplicação 'IberGames' inciada, à escuta no porto 8888");
});

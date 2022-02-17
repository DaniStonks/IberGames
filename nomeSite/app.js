var http = require("http");
var path = require("path");
var logger = require("morgan");
var express = require("express");
var bodyParser = require("body-parser");

var routes = require("./routes/index");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var comentarios = [];
app.locals.comentarios = comentarios;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", routes);

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
  console.log("Aplicação 'site' inciada, à escuta no porto 8888");
});

"use strict";

const express = require('express');
const passport = require("passport");
const LocalStrategy = require("passport-local");
//const crypto = require("crypto");
const mysql = require("mysql2");
const options = require("../config/options.json");

const router = express.Router();

const customFields = {
    usernameField: "loginUsername",
    passwordField: "loginPassword"
};

passport.use('local', new LocalStrategy(customFields, function verify(username, password, done) {
    let connection = mysql.createConnection(options.mysql);
    connection.connect();
    connection.query('SELECT Regist_name, Regist_pass, Regist_gestor FROM Registado WHERE Regist_name = ?', [username], function (err, row) {
        if (err) { return done(err); }
        if (!row) { return done(null, false); }

        if (row[0].Regist_pass != password) {
            return done(null, false);
        }
        return done(null, row);
    });
}));

//Tratar disto depois- tem haver com o conteudo exclusivo a admins
passport.serializeUser(function (user, done) {
    process.nextTick(function () {
        //done(null, { username: user.Regist_name, isAdmin: user.Regist_gestor });
        done(null, JSON.stringify(user));
    });
});

passport.deserializeUser(function (user, done) {
    process.nextTick(function () {
        return done(null, JSON.parse(user));
    });
});
//

router.get("/login", function (req, res, next) {
    res.render("login", {
        user: req.user
    });
});

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.post('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.post('/signup', function (req, res, next) {
    let connection = mysql.createConnection(options.mysql);
    connection.connect();
    connection.query('INSERT INTO Registado (Regist_name, Regist_email, Regist_pass, Regist_dataRegs, Regist_gestor) VALUES (?, ?, ?, ?, ?)', [
        req.body.signUpUsername,
        req.body.signUpEmail,
        req.body.signUpPassword,
        new Date(),
        0
    ], function (err) {
        if (err) { return next(err); }
        var user = {
            username: req.body.signUpUsername,
            isAdmin: 0
        };
        req.login(user, function (err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    });
});

module.exports = router;
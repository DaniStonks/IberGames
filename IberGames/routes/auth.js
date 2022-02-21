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
    connection.query('SELECT Regist_pass FROM Registado WHERE Regist_name = ?', [username], function (err, row) {
        if (err) { return done(err); }
        if (!row) { return done(null, false); }

        if (row[0].Regist_pass != password) {
            return done(null, false);
        }
        return done(null, row);
    });
}));

passport.serializeUser(function (user, done) {
    process.nextTick(function () {
        done(null, { id: user.id, username: user.username });
    });
});

passport.deserializeUser(function (user, done) {
    process.nextTick(function () {
        return done(null, user);
    });
});

/*
A usar quando se der reset na bd e usar-se hashing

passport.use(new LocalStrategy(function verify(username, password, done) {
    db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [username], function (err, row) {
        if (err) { return done(err); }
        if (!row) { return done(null, false, { message: 'Incorrect username or password.' }); }

        crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function (err, hashedPassword) {
            if (err) { return done(err); }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }
            return done(null, row);
        });
    });
}));
*/

router.get("/login", function (req, res, next) {
    res.render("login");
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
            id: this.lastID,
            username: req.body.signUpUsername
        };
        req.login(user, function (err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    });
});

module.exports = router;
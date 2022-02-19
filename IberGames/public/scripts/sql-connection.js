"use strict";

const mysql = require("mysql2");
const options = require("../config/options.json");

module.exports.connection = mysql.createConnection(options.mysql);
"use strict";
const mysql = require("mysql");
const options = require("../config/options.json");

/**
 * Função para retornar a lista de categorias da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getCategories(req, res) {
    let connection = mysql.createConnection(options.mysql);
    connection.connect();
    connection.query(
        'SELECT Cat_nome, Cat_desc FROM Categoria',
        function (err, rows, fields) {
            console.log(rows);
            if (err) {
                res.json({"message": "error", "error": err });
            }
            else {
                res.json({"message": "success", "category": rows });
            }
        });
    connection.end();
}

module.exports.getCategories = getCategories;

/**
 * Função para retornar a lista de países da BD.
 * @param {*} req 
 * @param {*} res 
 */
function getCountries(req, res) {
    let connection = mysql.createConnection(options.mysql);
    connection.connect();
    connection.query(
        // Equivalente a: 'SELECT * FROM country'
        'SELECT id, name, short_name FROM country',
        function (err, rows, fields) {
            if (err) {
                res.json({"message": "error", "error": err });
            }
            else {
                res.json({"message": "success", "country": rows });
            }
        });
    connection.end();

}
module.exports.getCountries = getCountries;
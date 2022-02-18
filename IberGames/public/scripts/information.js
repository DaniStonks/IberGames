"use strict";

/** 
* @class Guarda toda informação necessaria na execução do exercicio 
* @constructs Informacao
* @param {string} id - id do elemento HTML que contém a informação.
* 
* @property {string} id - id do elemento HTML que contém a informação.
* @property {country[]} countries - Array de objetos do tipo Country, para guardar todos os countries do nosso sistema
* @property {person[]} people - Array de objetos do tipo person, para guardar todas as pessoas do nosso sistema
*/
function Information(id) {
    this.id = id;
    this.countries = [];
    this.category = [];
};

/**
 * coloca a palavra "home" no div titulo e limpa o div informação
 */
Information.prototype.showHome = function () {
    /** @todo Completar */
    document.getElementById("headerTitle").textContent = "Home";
    replaceChilds(this.id, document.createElement("div"));
};

/**
 * coloca a palavra "People" no div titulo e cria dinamicamente uma tabela com a informação das pessoas
 */
Information.prototype.showPerson = function () {
    /** @todo Completar */
    document.getElementById("headerTitle").textContent = "People";
    let table = document.createElement("table");
    
    table.appendChild(tableLine(new Category(), true));
    this.category.forEach(category => table.appendChild(tableLine(category, false)));
    replaceChilds(this.id, table);
};

/**
 * coloca a palavra "Country" no div titulo e cria dinamicamente uma tabela com a informação das pessoas
 */
Information.prototype.showCountry = function () {
    /** @todo Completar */
    document.getElementById("headerTitle").textContent = "Countries";
    let table = document.createElement("table");
    table.appendChild(tableLine(new Country(), true));
    this.countries.forEach(country => table.appendChild(tableLine(country, false)));
    replaceChilds(this.id, table);
};

/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso person através do verbo GET, usando pedidos assincronos e JSON
 */
Information.prototype.getCategory = function () {
    /** @todo Completar */
    let category = this.category;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "category", true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            let response = JSON.parse(xhr.responseText);
            response.category.forEach(current => category.push(new Category(current.Cat_name, current.Cat_desc)));
        }
    };
    xhr.send();
};

/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso Country através do verbo GET, usando pedidos assincronos e JSON
 */
Information.prototype.getCountry = function () {
    /** @todo Completar */
    let countries = this.countries;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "country", true);
    xhr.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
            let response = JSON.parse(xhr.responseText);
            response.country.forEach(current => countries.push(new Country(current.id, current.name, current.short_name)));
        }
    };
    xhr.send();
};
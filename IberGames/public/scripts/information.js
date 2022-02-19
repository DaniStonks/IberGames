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
 * coloca a palavra "People" no div titulo e cria dinamicamente uma tabela com a informação das pessoas
 */
Information.prototype.showCategories = function () {
    let categoriesList = document.getElementById("categories");
    console.log(this.category);
    this.category.forEach(category => categoriesList.appendChild(categoryListChild(category)));
    //replaceChilds(this.id, table);
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
            response.category.forEach(current => category.push(new Category(current.Cat_nome, current.Cat_desc)));
        }
    };
    xhr.send();
};
"use strict";

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade país
* @constructs Country
* @param {string} id - id do país
* @param {string} name - nome do país
* @param {string} shortName - nome do país abreviado
*/
function Country(id, name, shortName) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
};
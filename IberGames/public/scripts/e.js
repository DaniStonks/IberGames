/**
 * Função que será executada quando a página estiver toda carregada, criando a variável global "info" com um objeto Information
 * Aproveitamos ainda para solicitar ao servidor o carregamento de dados de forma assincrona(AJAX)
 * @memberof window
 * @params {Event} event - objeto que representará o evento
 */
 window.onload = function (event) {
    let info = new Information("divInformation");
    info.getCategory();
    window.info = info;
};

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
            if (err) {
                res.json({"message": "error", "error": err });
            }
            else {
                res.json({"message": "success", "category": rows });
            }
        });
    connection.end();
}

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

/**
 * coloca a palavra "People" no div titulo e cria dinamicamente uma tabela com a informação das pessoas
 */
 Information.prototype.showPerson = function () {
    /** @todo Completar */
    document.getElementById("headerTitle").textContent = "Categories";
    let table = document.createElement("table");
    table.appendChild(tableLine(new Category(), true));
    this.category.forEach(category => table.appendChild(tableLine(category, false)));
    replaceChilds(this.id, table);
};


<ul id="forumCategories">
        <li>
            <a href="">Categoria 1</a>
            <p>Descrição categoria</p>
        </li>
        <li>
            <a href="">Categoria 2</a>
            <p>Descrição categoria</p>
        </li>
        <li>
            <a href="">Categoria 3</a>
            <p>Descrição categoria</p>
        </li>
        <li>
            <a href="">Categoria 4</a>
            <p>Descrição categoria</p>
        </li>
        <li>
            <a href="">Categoria 5</a>
            <p>Descrição categoria</p>
        </li>
        <li>
            <a href="">Categoria 6</a>
            <p>Descrição categoria</p>
        </li>
    </ul>
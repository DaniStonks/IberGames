/**************************************************
*	UC: Complemento de Base de Dados	2021/2022
*
*	Projeto
*	Grupo 3
*
*	(Nome)						(Nº Aluno)
*	Daniel Baptista				202001990
*	Rafael Silva				202001553
*	
*	Turma: 2ºL_EI-SW-04			Sala: F356
*
***************************************************/

CREATE DATABASE Proj_PW;
USE Proj_PW;

/*****************************
	--- Entidades PK ---
*****************************/

CREATE TABLE Categoria
(
  Cat_id INT IDENTITY(1,1),
  Cat_nome NVARCHAR(50),
  PRIMARY KEY (Cat_id)
);

CREATE TABLE Utilizador
(
  Util_id INT IDENTITY(1,1),
  PRIMARY KEY (Util_id)
);


/*****************************
	--- Entidades FK ---
*****************************/

CREATE TABLE Comentario
(
  Com_id INT IDENTITY(1,1),
  Com_texto NVARCHAR(4000),
  Post_id INT,
  PRIMARY KEY (Com_id)
);

CREATE TABLE Post
(
  Post_id INT IDENTITY(1,1),
  Post_name NVARCHAR(100),
  Post_datacria DATETIME,
  Cat_id INT,
  PRIMARY KEY (Post_id)
);

CREATE TABLE Visitante
(
  Visit_id INT IDENTITY(1,1),
  Util_id INT,
  PRIMARY KEY (Visit_id)
);

CREATE TABLE Registado
(
  Regist_id INT IDENTITY(1,1),
  Util_id INT,
  Regist_name VARCHAR(25),
  Regist_email VARCHAR(40),
  Regist_hashPass NVARCHAR(128),
  Regist_dataRegs DATETIME,
  PRIMARY KEY (Regist_id)
);

CREATE TABLE Gestor
(
  Gest_id INT IDENTITY(1,1),
  Regist_id INT,
  PRIMARY KEY (Gest_id)
);

/*****************************
 ---- Chaves Estrangeiras ----
******************************/

ALTER TABLE Comentario ADD FOREIGN KEY (Post_id) 
REFERENCES Post(Post_id)
ON DELETE NO ACTION
ON UPDATE CASCADE;

ALTER TABLE Post ADD FOREIGN KEY (Cat_id) 
REFERENCES Categoria(Cat_id)
ON DELETE NO ACTION
ON UPDATE CASCADE;

ALTER TABLE Visitante ADD FOREIGN KEY (Util_id) 
REFERENCES Utilizador(Util_id)
ON DELETE NO ACTION
ON UPDATE CASCADE;

ALTER TABLE Registado ADD FOREIGN KEY (Util_id) 
REFERENCES Utilizador(Util_id)
ON DELETE NO ACTION
ON UPDATE CASCADE;

ALTER TABLE Gestor ADD FOREIGN KEY (Regist_id) 
REFERENCES Registado(Regist_id)
ON DELETE NO ACTION
ON UPDATE CASCADE;

/*****************************
 --- Entidades Associação ---
******************************/

CREATE TABLE Reage
(
  reac_reacao VARCHAR(20),
  Util_id INT,
  Com_id INT,
  PRIMARY KEY (Util_id, Com_id),
  FOREIGN KEY (Util_id) REFERENCES Utilizador(Util_id),
  FOREIGN KEY (Com_id) REFERENCES Comentario(Com_id)
);

CREATE TABLE Faz
(
  Com_data DATETIME,
  Util_id INT,
  Com_id INT,
  PRIMARY KEY (Com_id),
  FOREIGN KEY (Util_id) REFERENCES Utilizador(Util_id),
  FOREIGN KEY (Com_id) REFERENCES Comentario(Com_id)
);

CREATE TABLE Vota
(
  Voto_voto CHAR(1),
  Util_id INT,
  Post_id INT,
  PRIMARY KEY (Util_id, Post_id),
  FOREIGN KEY (Util_id) REFERENCES Utilizador(Util_id),
  FOREIGN KEY (Post_id) REFERENCES Post(Post_id)
);

CREATE TABLE Gerir
(
  Regist_id INT,
  Post_id INT,
  PRIMARY KEY (Post_id),
  FOREIGN KEY (Regist_id) REFERENCES Registado(Regist_id),
  FOREIGN KEY (Post_id) REFERENCES Post(Post_id)
);

CREATE TABLE Moderacao
(
  Gest_id INT,
  Cat_id INT,
  PRIMARY KEY (Gest_id, Cat_id),
  FOREIGN KEY (Gest_id) REFERENCES Gestor(Gest_id),
  FOREIGN KEY (Cat_id) REFERENCES Categoria(Cat_id)
);
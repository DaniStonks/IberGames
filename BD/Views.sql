CREATE OR REPLACE VIEW viewPosts 
AS 
SELECT Regist_name as Criador, Post_name as Nome, Post_desc as Conteudo,
Cat_nome as Categoria, CalcVotosPost(p.Post_id) as Votos
FROM post p 
JOIN categoria c ON c.Cat_id = p.Cat_id
JOIN gerir g ON g.Post_id = p.Post_id
JOIN registado r ON g.Regist_id = r.Regist_id; 

CREATE OR REPLACE VIEW viewComentarios
AS 
SELECT Regist_name as Criador, Com_texto as Conteudo,
Post_name as Jogo, Com_data as Data
FROM comentario c 
JOIN faz f ON c.Com_id = f.Com_id
JOIN registado r ON r.Regist_id = f.Regist_id
JOIN post p ON p.Post_id = c.Post_id;

CREATE OR REPLACE VIEW viewVotosUtilizador
AS 
SELECT Regist_name as Criador, Com_texto as Conteudo,
Post_name as Jogo, Com_data as Data
FROM comentario c 
JOIN faz f ON c.Com_id = f.Com_id
JOIN registado r ON r.Regist_id = f.Regist_id
JOIN post p ON p.Post_id = c.Post_id;
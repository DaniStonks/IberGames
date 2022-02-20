CREATE OR REPLACE VIEW viewPosts 
AS 
SELECT Post_name as Nome, Post_desc as Conteudo,
lower(Cat_nome) as Categoria, CalcVotosPost(Post_id) as Votos
FROM post p 
JOIN categoria c ON c.Cat_id = p.Cat_id;

CREATE OR REPLACE VIEW viewComentarios
AS 
SELECT Regist_name as Criador, Com_texto as Conteudo,
Post_name as Jogo, Com_data as Data
FROM comentario c 
JOIN faz f ON c.Com_id = f.Com_id
JOIN utilizador u ON u.Util_id = f.Util_id
JOIN registado r ON r.Util_id = u.Util_id
JOIN post p ON p.Post_id = c.Post_id;
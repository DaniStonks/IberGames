CREATE OR REPLACE VIEW viewPosts 
AS 
SELECT Post_name as Nome, Post_desc as Conteudo,
lower(Cat_nome) as Categoria, CalcVotosPost(Post_id) as Votos
FROM post p 
JOIN categoria c ON c.Cat_id = p.Cat_id;

SELECT * FROM viewPosts;
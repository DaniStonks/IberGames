DELIMITER //
CREATE PROCEDURE votarEmPost(voto CHAR(1), registNome VARCHAR(25), postNome VARCHAR(50))
BEGIN
	DECLARE postID, registID INT;
    SET postID = (SELECT Post_id FROM post WHERE Post_name = postNome);
    SET registID = (SELECT Regist_id FROM registado WHERE Regist_name = RegistNome);
    
    INSERT INTO vota(Voto_voto, Regist_id, Post_id)
    VALUES (voto, registID, postID);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE removerVoto(voto CHAR(1), registNome VARCHAR(25), postNome VARCHAR(50))
BEGIN
	DECLARE postID, registID INT;
    SET postID = (SELECT Post_id FROM post WHERE Post_name = postNome);
    SET registID = (SELECT Regist_id FROM registado WHERE Regist_name = RegistNome);
    
    DELETE FROM vota WHERE Voto_voto = voto AND Regist_id = registID AND Post_id = post_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE atualizarVoto(voto CHAR(1), registNome VARCHAR(25), postNome VARCHAR(50))
BEGIN
	DECLARE postID, registID INT;
    SET postID = (SELECT Post_id FROM post WHERE Post_name = postNome);
    SET registID = (SELECT Regist_id FROM registado WHERE Regist_name = RegistNome);
    
    UPDATE vota
    SET
		Voto_voto = voto
	WHERE
		Regist_id = registID AND
        Post_id = postID;
END //
DELIMITER ;
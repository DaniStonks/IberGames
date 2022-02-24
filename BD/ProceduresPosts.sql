DELIMITER //
CREATE PROCEDURE votarEmPost(voto CHAR(1), registNome VARCHAR(25), postNome VARCHAR(50))
BEGIN
	DECLARE postID, registID INT;
    DECLARE oldVoto CHAR(1);
    
    SET postID = (SELECT Post_id FROM post WHERE Post_name = postNome);
    SET registID = (SELECT Regist_id FROM registado WHERE Regist_name = RegistNome);
    SET oldVoto = (SELECT Voto_voto FROM vota WHERE Post_id = postID AND Regist_id = registID);
    
    IF oldVoto is NULL OR oldVoto = '' THEN
		INSERT INTO vota(Voto_voto, Regist_id, Post_id)
		VALUES (voto, registID, postID);
	ELSEIF oldVoto = voto THEN
		CALL removerVoto(voto, registID, postID);
	ELSE
		CALL atualizarVoto(voto, registID, postID);
	END IF;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE removerVoto(voto CHAR(1), registID INT, postID INT)
BEGIN
    DELETE FROM vota WHERE Voto_voto = voto AND Regist_id = registID AND Post_id = post_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE atualizarVoto(voto CHAR(1), registID INT, postID INT)
BEGIN
    UPDATE vota
    SET
		Voto_voto = voto
	WHERE
		Regist_id = registID AND
        Post_id = postID;
END //
DELIMITER ;
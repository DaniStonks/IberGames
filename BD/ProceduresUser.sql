DELIMITER //
CREATE PROCEDURE banirUtilizador(registNome VARCHAR(25))
BEGIN
    UPDATE registado
    SET
		Regist_banido = 1
	WHERE
		Regist_name = registNome;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE desbanirUtilizador(registNome VARCHAR(25))
BEGIN
    UPDATE registado
    SET
		Regist_banido = 0
	WHERE
		Regist_name = registNome;
END //
DELIMITER ;
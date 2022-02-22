DELIMITER //
CREATE FUNCTION CalcVotosPost (postID INT)
RETURNS INT
DETERMINISTIC
BEGIN
	DECLARE upvotes, downvotes INT;
	SET upvotes = (SELECT COUNT(Voto_voto) FROM vota
				  WHERE Voto_voto = 'U' AND Post_id = postID);
	SET downvotes = (SELECT COUNT(Voto_voto) FROM vota
				  WHERE Voto_voto = 'D' AND Post_id = postID);
	RETURN (upvotes-downvotes);
END; //
DELIMITER ;
window.onload = function(){
  console.log(posts);
  document.querySelectorAll('.upvote').forEach(button => {
    button.addEventListener('click', event => {
    })
  })
}
  
function votePost(vote, game, username){
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  connection.query('CALL votarEmPost(?, ?, ?)', [
    vote,
    username,
    game
  ], function (err) {
    if (err) { return console.log(err); }
    res.redirect("/forum");
  });
  connection.end();
}

function changeVoteImage(vote, game){
  return "e";
}

/*
function changeStyleSheet(sheet){
  document.getElementById("styleSheet").setAttribute("href", sheet);
}

function changeTheme(){
  let themeButton = document.getElementById("themeButton");

  themeButton.onclick = function () {swapStyleSheet("/stylesheets/darkModeSite.css");};
}
*/

$('button').click(function() {
  let mainSheet = $('#pageStyle').attr('href');
  if(mainSheet === "/stylesheets/whiteModeSite.css")
     $('#pageStyle').attr('href','/stylesheets/darkModeSite.css');
  else
     $('#pageStyle').attr('href','/stylesheets/whiteModeSite.css');
  });
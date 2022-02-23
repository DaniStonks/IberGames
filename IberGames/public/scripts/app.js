/*
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

function changeStyleSheet(sheet){
  document.getElementById("styleSheet").setAttribute("href", sheet);
}
*/

function changeMainPageTheme(){
  let currentSheet = document.getElementById("activeTheme");
  if(currentSheet.classList[0] == 'light'){
    currentSheet.setAttribute("href", "/stylesheets/darkModeSite.css");
    currentSheet.classList.remove("light");
    currentSheet.classList.add("dark");
  }
  else{
    currentSheet.setAttribute("href","/stylesheets/whiteModeSite.css");
    currentSheet.classList.remove("dark");
    currentSheet.classList.add("light");
  }
}
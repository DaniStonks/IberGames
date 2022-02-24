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

function changeForumPageTheme(){
  let currentSheet = document.getElementById("activeTheme");
  if(currentSheet.classList[0] == 'light'){
    currentSheet.setAttribute("href", "/stylesheets/darkModeForum.css");
    currentSheet.classList.remove("light");
    currentSheet.classList.add("dark");
  }
  else{
    currentSheet.setAttribute("href","/stylesheets/whiteModeForum.css");
    currentSheet.classList.remove("dark");
    currentSheet.classList.add("light");
  }
}


/**** ****/
const newsImage = document.getElementsByClassName("game-image");
const newsTitle = document.getElementsByClassName("news_title");
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
function eraseContent(){
  const main = document.getElementsByTagName("main");
  
  while(main[0].hasChildNodes()){
    main[0].removeChild(main[0].firstChild);
  }
}

function putContent(gameName){
  const newsData = JSON.parse(news-posts);
  console.log(newsData);
  eraseContent();



}
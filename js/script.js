function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var widths = [0, 629, 954];
var searchbar2 = document.getElementById("searchbar2")
  
  window.onload = window.localStorage.getItem('dark-mode');
  window.onload = console.log("urmom")

  window.onresize = resizeFn;
  window.onresize = searchbar2.style.display = "none"; 
  resizeFn();

function onresize () {
searchbar2.style.display = "none"; 

}

function resizeFn() {
  var Hamburger = document.getElementById("HAMBURGERR");
  var searchbar2 = document.getElementById("searchbar2")
  var searchicon = document.getElementById("searchicon")
  var searchbar = document.getElementById("searchbar");
  var footerimg = document.getElementById("footerlink")

  searchbar2.style.display = "none";

  if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
    footerimg.className = "vertical-flex-container"
  } else {
    footerimg.className = "horizontal-flex-container"
    Hamburger.style.display = "none";
  }
  
  if (window.innerWidth<=widths[2]) {
    searchbar.style.display = "none";
    searchicon.style.display = "flex";
    searchbar2.style.display = "none";
  } else {
    searchbar.style.display = "flex";
    searchicon.style.display = "none";
    searchbar2.style.display = "nobe";
  }
}



function darkMode() {

  var body = document.getElementById("body");
  var searchbar2 = document.getElementById("searchbar2");
  var searchicon = document.getElementById("searchicon");

  if (body.className === "light-mode") {
    window.localStorage.setItem('dark-mode', 'dark-mode');
    body.className = "dark-mode";
    searchicon.className = "dot dark-mode"
    searchbar2.className = "searchbar dark-mode"
    document.getElementById("darkmodetext").innerHTML = "Dark Mode";
    console.log("toggle dark")
  } else {
    window.localStorage.setItem('dark-mode', 'light-mode');
    body.className = "light-mode";
    searchicon.className = "dot light-mode"
    searchbar2.className = "searchbar light-mode"
    document.getElementById("darkmodetext").innerHTML = "Light Mode";
    console.log("toggle light")
  }
}

function getstorage() {
  var body = document.getElementById("body");
  var searchbar2 = document.getElementById("searchbar2");
  var toggleswitch = document.getElementById("toggleswitch");
  var searchicon = document.getElementById("searchicon");
  var darkmode = window.localStorage.getItem('dark-mode')
  
  window.localStorage.getItem('dark-mode');
  
  console.log(window.localStorage.getItem('dark-mode'));
  
  if (darkmode === ('dark-mode')) {
    toggleswitch.checked = "checked";
    console.log('test dark')
    body.className = "dark-mode";
    searchicon.className = "dot dark-mode";
    searchbar2.className = "searchbar dark-mode"
    document.getElementById("darkmodetext").innerHTML = "Dark Mode";
  } else {
    toggleswitch.checked = "";
    console.log('test light')
    body.className = "light-mode";
    searchicon.className = "dot light-mode";
    searchbar2.className = "searchbar light-mode"
    document.getElementById("darkmodetext").innerHTML = "Light Mode";
  }
}

function closeSearch() {
  var searchbar = document.getElementById("searchbar2");
  var searchicon = document.getElementById("searchicon");
  var widths = [0, 629, 954];
  searchbar.style.display = "none";
  if (window.innerWidth<=widths[2]) {
  searchicon.style.display = "flex";
  }
}

function openSearch() {
  var searchbar = document.getElementById("searchbar2");
  var searchicon = document.getElementById("searchicon");
  searchbar.style.display = "flex";
  searchicon.style.display = "none";
}

function BIGHIDETHING() {
  var Hamburger = document.getElementById("HAMBURGERR");
  if (Hamburger.style.display === "none") {
    Hamburger.style.display = "block";
  } else {
    Hamburger.style.display = "none";
  }
}


window.onload = resizeFn;
window.onload = getstorage;
const logo = document.getElementById("logo");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const background = document.getElementById("background");
const header = document.getElementById("header");
const alertAudio = new Audio('audio/alert.m4a');
var animPlaying = false;
var sidebarOpen = false;

logo.onclick = function() {
  alertAudio.play();
  if (animPlaying === false) {
    animPlaying = true;
    logo.style.animation = "logoClick 1s ease";
    setTimeout(function(){
      logo.style.animation = "";
      animPlaying = false;
    }, 1000);
  }
};

function closeSidebar() {
  sidebar.style.left = "-35rem";
  main.style.filter = "";
  background.style.filter = "";
  header.style.filter = "";
}

function openSidebar() {
  sidebar.style.left = "0";
  main.style.filter = "blur(2vh)";
  background.style.filter = "blur(2vh)";
  header.style.filter = "blur(2vh)";
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebarOpen === false) {
    openSidebar();
  } else {
    closeSidebar();
  }
}
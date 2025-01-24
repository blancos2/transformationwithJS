function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = " I Love Gaming :)";
}

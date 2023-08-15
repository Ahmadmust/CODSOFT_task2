

var open_menu = document.querySelector(".open");
var close_menu = document.querySelector(".close");
var mobile_nav = document.querySelector(".mobile-nav");

open_menu.addEventListener("click",()=>{
    open_menu.classList.add("active");
    close_menu.classList.remove("active");
    mobile_nav.classList.remove("active");
});
close_menu.addEventListener("click",()=>{
    open_menu.classList.remove("active");
    close_menu.classList.add("active");
    mobile_nav.classList.add("active");
});
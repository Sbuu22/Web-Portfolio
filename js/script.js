const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

};

   let darkModeICon = document.querySelector('#darkMode-icon');
   
   darkModeICon.onclick = () => {
    darkModeICon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-mode');
   };

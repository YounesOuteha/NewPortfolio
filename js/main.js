//Select DOM elemnets

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');
const myProject1 = document.querySelector('.project1');
const firstImg = document.querySelector('.img1');

//Set the initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item =>item.classList.add('show'));

        //Reset the menu state to false
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item =>item.classList.remove('show'));

        //Reset the menu state to false
        showMenu = false;
    }
}


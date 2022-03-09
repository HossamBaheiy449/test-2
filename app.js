const navBar = document.querySelector('.nav');
const btn = document.querySelector('.nav-toggle');

let toggleNav =() =>{
    navBar.classList.toggle("nav--visible");
    console.log(navBar)
}

btn.addEventListener('click',toggleNav);

const nav_btn=document.querySelector(".navbtn");
const nav_header=document.querySelector(".header");
const toggleNavbar=()=>{
    nav_header.classList.toggle("active")
};





nav_btn.addEventListener('click',()=>toggleNavbar());
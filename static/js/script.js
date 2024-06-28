function myFunction() {
    var navbar = document.getElementById("myNavbar");
    var scrollValue = window.scrollY;
    if (scrollValue < 200) {
        navbar.classList.remove('bgcolor');
    } else {
        navbar.classList.add('bgcolor');
    }
}
window.addEventListener('scroll', myFunction);


var preloader = document.getElementById('loader');
function loading(){
    preloader.style.display = 'none';
}
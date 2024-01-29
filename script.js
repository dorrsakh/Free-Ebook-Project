const windowInnerWidth = window.innerWidth;

function whenScroll() {
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30 && windowInnerWidth > 991) {
            navbar.className += " bg-dark navbar-sticky shadow"
        } else if (0 <= window.scrollY <= 30 && windowInnerWidth > 991) {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
            navbar.classList.remove('shadow');
        } else{
            navbar.className += " bg-dark navbar-sticky shadow"
        }
    });
}

document.addEventListener('DOMContentLoaded', whenScroll);
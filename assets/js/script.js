function menuToggle() {
    let menuMonile = document.querySelector('#hero_area');

    if(menuMonile.style.width == '200px') {
        menuMonile.style.width = '0px'
    } else {
        menuMonile.style.width = '200px'
    }
};

function topPage() {
    window.scrollTo({
        top:0,
        behavior: `smooth`
    });
};

function scrollPage () {
    if(window.scrollY == 0) {
        document.querySelector('#top_button').style.display = 'none'
    } else {
        document.querySelector('#top_button').style.display = 'block'
    }
};

window.addEventListener('scroll', scrollPage)
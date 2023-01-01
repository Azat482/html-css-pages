const update_header_poster = () => {
    const header_poster_img_height = document.querySelector('.header-poster__imagebox').offsetHeight;
    if( (this.window.innerWidth > 1200) && (this.window.innerWidth < 1400) ) {
        console.log('aasa');
        document.querySelector('.header-poster__info').style.height = header_poster_img_height + 'px';
    }
    else {
        document.querySelector('.header-poster__info').style.height = 'auto';
    }
}

window.addEventListener('resize', function(e) {
    update_header_poster();
}, true)

update_header_poster();


//hamburger menu
var toggle = document.querySelector(".header__top-hamburger-btn");
toggleHandler(toggle);
function toggleHandler(toggle){
    toggle.addEventListener( "click", function(e){
        console.log("header button clicked");
        e.preventDefault();
        (this.classList.contains("header__top-hambtn-active") === true) ? this.classList.remove("header__top-hambtn-active") : this.classList.add("header__top-hambtn-active");
        document.querySelector(".header__top-nav").classList.toggle("header__top-hamburger-list-active");
    });
}
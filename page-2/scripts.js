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
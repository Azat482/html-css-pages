(function(){
    "use strict";

    //hamburger menu
    var toggle = document.querySelector(".header__top-hamburger-btn");
    toggleHandler(toggle);
    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
        console.log("header button clicked");
        e.preventDefault();
        (this.classList.contains("header__top-hambtn-active") === true) ? this.classList.remove("header__top-hambtn-active") : this.classList.add("header__top-hambtn-active");
        document.querySelector(".header-top-nav").classList.toggle("header__top-hamburger-list-active");
    });
    }
  })();
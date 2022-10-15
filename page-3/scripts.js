(function() {
    "use strict";

    //hamburger menu
    var toggle = document.querySelector(".header__top-hamburger-btn");
    toggleHandler(toggle);
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        console.log("header button clicked");
        e.preventDefault();
        (this.classList.contains("header__top-hambtn-active") === true) ? this.classList.remove("header__top-hambtn-active") : this.classList.add("header__top-hambtn-active");
        document.querySelector(".header__top-nav").classList.toggle("header__top-hamburger-list-active");
    });
    }

    //accordion panel
    var accordion_elements = document.getElementsByClassName("block-3__accordion-btn"); 
    for(let i = 0; accordion_elements.length; i++){
      accordion_elements[i].addEventListener("click", function(e){
        e.preventDefault();
        this.classList.toggle("accordion__btn-active");
        var panel = this.querySelector(".block-3__accordion-panel");
        if(panel.style.maxHeight){
          panel.style.maxHeight = null;
        }
        else{
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
        console.log("accordion clicked", panel);
      });
    }
  })();
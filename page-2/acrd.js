var accordion_elements = Object.values(document.getElementsByClassName("group-5__accordeon-btn"));
    accordion_elements.forEach(accordion_element => {
        accordion_element.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle("group-5__accordion__btn-active");
            var panel = this.querySelector(".group-5__accordeon-btn__panel");
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            console.log("accordion clicked", panel);
        });
    });
"use strict"

document.addEventListener("DOMContentLoaded", initPage());

function initPage() {

    window.addEventListener("scroll", () => {
        let d = document.querySelector("#about");
        if (d.offsetTop < document.documentElement.scrollTop) {
            document.querySelector("#btn-up").classList.remove("invisible");
        } else {
            document.querySelector("#btn-up").classList.add("invisible");
        }
    })

    document.querySelector("#btn-about").addEventListener("click", function(e) {
        e.preventDefault();
        goElement(document.querySelector("#about"));
    });

    function goElement(element) {
        let posiciones = element.getBoundingClientRect();
        window.scroll(posiciones.left, posiciones.top);
    }

    document.querySelector("#btn-contact").addEventListener("click", (e) => {
        e.preventDefault();
        goElement(document.querySelector("#contactInfo"));
    });

    document.querySelector("#link-top").addEventListener("click", (e) => {
        e.preventDefault();
        goElement(document.querySelector("#header-page"));
    });

    document.querySelector("#btn-product").addEventListener("click", (e) => {
        e.preventDefault();
        goElement(document.querySelector("#products"));
    });

    document.querySelector("#btn-service").addEventListener("click", (e) => {
        e.preventDefault();
        goElement(document.querySelector("#services"));
    })

}
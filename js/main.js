"use strict"

document.addEventListener("DOMContentLoaded", initPage());

function initPage() {
    /* cargarArchivo(); */

    /* async function cargarArchivo() {
        try {
            let r = await fetch('texto.txt');
            console.log(r);
            let text = await r.text();
            console.log(text);
        } catch (e) {
            console.log(e);
        }
    } */


    document.querySelector("#btn-about").addEventListener("click", function(e) {
        e.preventDefault();
        let about = document.getElementById("about");
        about.offsetTop();
    });
}

const nameinput = document.getElementById("nameinput");
const lastnameinput = document.getElementById("lastnameinput");
const passinput = document.getElementById("passinput");
const repeatpassinput = document.getElementById("repeatpassinput");
const mailinput = document.getElementById("mailinput");
const idinput = document.getElementById("idinput");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const msj = document.getElementById("msj");
const btnSubmit = document.getElementById("btnSubmit");


btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()

    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //expresion regular
    parrafo.innerHTML = ""

    if (nameinput.value.length < 7) {
        warnings += `The name is too short <br> `
        entrar = true
    }

    if (lastnameinput.value.length < 7) {
        warnings += `The lastnames are too short <br> `
        entrar = true
    }

    if (idinput.value.length < 7) {
        warnings += `The id is incorrect <br> `
        entrar = true
    }

    if (!regexEmail.test(mailinput.value)) {
        warnings += `The email is not valid <br> `
        entrar = true
    }

    if (passinput.value.length < 7) {
        warnings += `The password is too short <br> `
        entrar = true
    }

    if (repeatpassinput.value != passinput.value) {
        warnings += `The password is incorrect <br> `
        entrar = true
    }

    if (entrar == true) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "send"
        msj.style.display = "block"//mostrar dialogo oculto para enviar datos

    }


// msj.style.display = "block"

});



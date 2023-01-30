const texto_desencriptar = document.querySelector(".area_copiar");
const texto_encriptar = document.querySelector(".input_texto");
const regex = /[-'/`~!#*$@_%+=.,^&(){}[\]|[;:”<>?\\]|[ÁÉÍÓÚÜÑáéíóúüñ]/;

function encriptar() {
    let text = texto_encriptar.value;

    text = text.toLowerCase();
    if (!regex.test(text)) {
        text = text.replaceAll(/e/g, "enter")
            .replaceAll(/i/g, "imes")
            .replaceAll(/a/g, "ai")
            .replaceAll(/o/g, "ober")
            .replaceAll(/u/g, "ufat");
        texto_desencriptar.value = text;
        texto_encriptar.value = '';
        texto_desencriptar.style.backgroundImage = "none";
    } else {
        alert("no se permiten acentos ni caracteres especiales");
        texto_encriptar.value = '';
    }
}

function desencriptar() {
    let texto = texto_encriptar.value;
    texto = texto.toLowerCase();

    if (!regex.test(texto)) {
        texto = texto.replaceAll(/enter/g, "e")
            .replaceAll(/imes/g, "i")
            .replaceAll(/ai/g, "a")
            .replaceAll(/ober/g, "o")
            .replaceAll(/ufat/g, "u");
        texto_desencriptar.value = texto;
        texto_encriptar.value = '';
        texto_desencriptar.style.backgroundImage = "none";
    } else {
        alert("no se permiten acentos ni caracteres especiales");
        texto_encriptar.value = '';
    }
}

function btnCopiar() {
    texto_desencriptar.select();
    texto_desencriptar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(texto_desencriptar.value);
}
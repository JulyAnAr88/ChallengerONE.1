var botonEncriptar = document.querySelector("#encriptador");

botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();

    var texto = document.querySelector("#texto");
    var resultado = document.querySelector("#resultado");
    resultado.textContent = verificarCaracteresProhibidos(texto.value);
    //resultado.textContent = encriptar(texto.value);

})


function encriptar(palabraAencriptar) {

    return palabraAencriptar.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

}

function verificarCaracteresProhibidos(textoAverificar) {

    var re = /[^a-zñ]/;
    
    array = textoAverificar.split(" ");
    
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (re.test(e)){
            alert("Solo letras minúsculas y sin acentos");
        }
                  
    }

}


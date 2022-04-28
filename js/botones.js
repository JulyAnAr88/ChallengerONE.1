var botonEncriptar = document.querySelector("#encriptador");
var botonDesencriptar = document.querySelector("#desencriptador");
var texto = document.querySelector("#texto");
var resultado = document.querySelector("#resultado");
var botonCopiar =  document.querySelector("#copiador");

botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var bloque = document.querySelector("#sText");     
    
    var verificar = verificarCaracteresProhibidos(texto.value);
    
    if (verificar){

       
        bloque.style.visibility = "hidden"
        copiador.style.visibility = "visible"
        resultado.textContent = encriptar(texto.value); 
        texto.value = '';
    }    

})


function encriptar(palabraAencriptar) {

    return palabraAencriptar.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

}


botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var texto = document.querySelector("#texto");
    
    var resultado = document.querySelector("#resultado");
    resultado.textContent = desencriptar(texto.value);

})


function desencriptar(palabraADesencriptar){
    
    return palabraADesencriptar.replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ai','a')
    .replaceAll('ober','o')
    .replaceAll('ufat','u');

}

function verificarCaracteresProhibidos(textoAverificar) {

    var re = /[^a-zñ]/;
    
    array = textoAverificar.split(" ");
    
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (re.test(e)){
            alert("¡Solo letras minúsculas y sin acentos!");
            
            return false;
        }else{
            return true;
        }
                  
    }


}

botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    
    texto.value = resultado.textContent;
    resultado.value = '';
    
})


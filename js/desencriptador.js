var botonDesencriptar = document.querySelector("#desencriptador");

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
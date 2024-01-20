let numeroSecreto = 0; 
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intento} ${(intento == 1)? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");//habiilita el botton de reinciar juego solo cuando hacierto.
    }else {
        //cuando el usuario no acertó
        limpiarCaja();
        if (numeroDeUsuario>numeroSecreto){
           asignarTextoElemento("p","El numero secreto es menor!!");
         }else{
            if(numeroDeUsuario<numeroSecreto){
                asignarTextoElemento("p","El número secreto es mayor!!");
                }
            
            }
            intento++;
    }
}

function limpiarCaja (){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento("p","Ya se sortearon todos los números posibles")  ;
   }else{
        //si el numero esta incluiod en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
        }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado
        }
   }
   
}
function condicionesInciales(){
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p' ,`Indica un número del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento=1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //reiniciar mensaje de inicio
    //reiniciar los intentos
    //generar el numero aleatorio
    condicionesInciales();
    //deshabilitar el boton
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesInciales();

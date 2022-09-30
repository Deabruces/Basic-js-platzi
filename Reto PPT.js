var pi = "piedra";
var pa = "papel";
var ti = "tijera";

var resultado = function(user,cpu){
  if(user === cpu){
    console.log("El juego esta empatado");
  }else if(user===pi && cpu===ti){
    console.log("Ganaste");  
  }else if(user===pa && cpu===pi){
    console.log("Ganaste"); 
  }else if(user===ti && cpu===pa){
    console.log("Ganaste"); 
  }else{
    console.log("Perdiste");
  }
}
resultado(pi,ti);
//Ganaste
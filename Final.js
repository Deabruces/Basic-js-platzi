const reglasDelJuego={
  PIEDRA:{
    TIJERA:"PIERDE",
    PAPEL:"GANA"
  },
  PAPEL:{
    PIEDRA:"PIERDE",
    TIJERA:"GANA"
  },
  TIJERA:{
    PIEDRA:"GANA",
    PAPEL:"PIERDE"
  }
}

function jugar(usuario){
  const cpu=opciones[Math.floor(Math.random()*3)]
  if(!opciones.includes(usuario)){
    throw new TypeError('el valor ingresado no es valido')
  }
  if(cpu===usuario) return "EMPATE"
  return `${reglasDelJuego[cpu][usuario]} CONTRA ${cpu}`
}
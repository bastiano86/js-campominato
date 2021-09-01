//Creiamo il numero casuale
for (i=0; i<16; i++) {

    let numeroCasualeComputer = getRandomInt(100);
    console.log(numeroCasualeComputer);

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

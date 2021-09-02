let listaBombe = [];            //array che contiene le bombe
let numeroBombe = 0;            //numero di bombe del computer 
let tettoMaxBombe = 100;        //numero massimo di randomizzazione per le bombe

let difficoltà = prompt('scegli tra: facile, medio e difficile');
let difficoltàPossibili = [ 'facile', 'medio', 'difficile' ];


switch (difficoltà) {
        case 'facile':
            numeroBombe = 5;
            tettoMaxBombe = 100;
            break;
            
        case 'medio':
            numeroBombe = 10;
            tettoMaxBombe = 100;
            break;  
            
        case 'difficile':
            numeroBombe = 20;
            tettoMaxBombe = 100;
            break;
        
        default:
            numeroBombe = 5;
            tettoMaxBombe = 100;
    }

let numeroUtente = 0;

let listaNumeriUtente = [];     //array conn i numeri dell'utente

while (listaBombe.length < numeroBombe){
    if(!listaBombe.includes(listaBombe)) //condizione per far sì che il pc non ripeta numeri
    listaBombe.push(getRandomNumber(1,tettoMaxBombe));
};

console.log(listaBombe);

while (listaNumeriUtente.length < numeroBombe) {
    let numeroUtente = parseInt(prompt('scrivi una mossa'));
    if (listaBombe.includes(numeroUtente)==true){
        alert('hai perso')
    } else {
       listaNumeriUtente.push(numeroUtente);
    }
}

console.log(listaNumeriUtente);


//funzione che genera un numero random tra 2 valori
function getRandomNumber (min,max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;

}


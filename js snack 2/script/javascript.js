// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



let squadre = [
    {
        "nome": "Gli Scaldapanchine",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Goleador Anonimi",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "I Pantofolai",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Tacco12 United",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "I Cotechini Volanti",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "LT Sonno Profondo",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
];


let resultArray = [];
let test = {};

for (let i in squadre){
    squadre[i].puntiFatti = numGenerator(0, 100);
    squadre[i].falliSubiti = numGenerator(0, 50);
    
    resultArray.push({"nome": squadre[i].nome, "falliSubiti": squadre[i].falliSubiti})  
}

console.log(resultArray, test );



function numGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}




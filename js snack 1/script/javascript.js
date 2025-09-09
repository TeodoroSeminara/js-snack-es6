// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


const bike = [
    {
        "nome": "Mountain Bike",
        "peso": 15
    },
    {
        "nome": "City Bike",
        "peso": 12
    },
    {
        "nome": "Gravel Bike",
        "peso": 10
    },
    {
        "nome": "BMX",
        "peso": 9
    },
    {
        "nome": "E - Bike",
        "peso": 23
    }
];
let newBike=     {
        "nome": "Mountain Bike",
        "peso": 7
    };

bike.push(newBike);

let pesoBike = bike[0];

for ( let i in bike ){
    if (bike[i].peso < pesoBike.peso){
        pesoBike = bike[i];
    }
}
console.log(pesoBike.peso);





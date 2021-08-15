//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

{
    let nizBrojeva = [1, 15, 18, 6, 25, 5, 12, 20, 13];
    function deljivSaPet(x) {
        if (x % 5 == 0)
            console.log(x);;
    }
    nizBrojeva.forEach(deljivSaPet);
}
console.log("-----------------");
//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)
let pokemon1 = {
    ime: "Bulbasaur", vrsta: "travnati", sposobnosti: ["Overgrow", "ThickFat", "Chlorophyll"], karakteristike: { napad: 5, odbrana: 2, brzina: 10 }
}
let pokemon2 = {
    ime: "Charmander", vrsta: "vatreni", sposobnosti: ["Blaze", "CuteCharm"], karakteristike: { napad: 20, odbrana: 3, brzina: 8 }
}
let pokemon3 = {
    ime: "Seel", vrsta: "vodeni", sposobnosti: ["ThickFat", "Hydration", "Chlorophyll"], karakteristike: { napad: 2, odbrana: 5, brzina: 14 }
}
let pokemon4 = {
    ime: "Squirtle", vrsta: "vodeni", sposobnosti: ["Torrent", "Hydration", "CuteCharm"], karakteristike: { napad: 4, odbrana: 5, brzina: 12 }
}
let pokemon5 = {
    ime: "Vulpix", vrsta: "vatreni", sposobnosti: ["FlashFire", "CuteCharm"], karakteristike: { napad: 8, odbrana: 7, brzina: 10 }
}
let kolekcijaPokemona = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];

//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona


function spajanjeSposobnosti(niz) {
    let sveSposobnosti = [];
    niz.forEach(function (element) { //element niza je jedan pokemon
        for (const x of element.sposobnosti) { //za svaku vrednost iz property-ja sposobnosti
            if (!sveSposobnosti.includes(x))
                sveSposobnosti.push(x);
        }
    })
    return sveSposobnosti;
}
console.log(spajanjeSposobnosti(kolekcijaPokemona));

console.log("-----------------");
//4. Sortirati pokemone po brzini, rastuće

kolekcijaPokemona.sort((a, b) => {  //metod sort uzima za parametar f-ju
    if (a.karakteristike.brzina > b.karakteristike.brzina) return 1; //menjaju mesta
    return -1; //nista se ne menja
});
console.log(kolekcijaPokemona);

console.log("-----------------");
/*5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika,
onog koji ima najveću jačinu napada */

function najjaciNapad(niz) {
    let max = 0; //vrednost od koje pocinjem poredjenje brojeva u "napad"
    let najjaci = '';  //tu ce mi ispisati ime pobednika
    for (const el of niz) {
        if (max < el.karakteristike.napad) {
            max = el.karakteristike.napad; //max dobija tu vrednost da bi nju uporedjivao sa sledecim
            najjaci = el.ime;
        }
    }
    return najjaci;
}
console.log(`Pobednik je ${najjaciNapad(kolekcijaPokemona)}, on ima najjaci napad!`);
function blokje(lengte, hoogte, diepte){
   return lengte * hoogte * diepte;
}
let blokjeInhoud = blokje(10, 5, 10);
console.log(blokjeInhoud);

function inhoudbuis(diameter, hoogte1){
   let pi = Math.PI;
   let straal = diameter / 2;
   return Math.pow(straal,2) * pi * hoogte1
}

let inhoudB = inhoudbuis(5, 5);
console.log(inhoudB); 

function driehoek(lengte2, hoogte2){
   return Math.sqrt(Math.pow(lengte2, 2) + Math.pow(hoogte2, 2));
}
let drie = driehoek(20,50);
console.log(drie)

function nummers(one,two,three,four,five,six,seven){
   let gemmidelde = one + two + three + four + five + six + seven;
   return gemmidelde / 7;
}

let gemmidelde = nummers(2,6,4,3,7,2,5)
console.log(gemmidelde)
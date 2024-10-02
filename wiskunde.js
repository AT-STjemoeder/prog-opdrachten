function blokje(lengte, hoogte, diepte){
   return lengte * hoogte * diepte
}
let blokjeInhoud = blokje(10, 5, 10);
console.log(blokjeInhoud);

function inhoudblokje(diameter, hoogte1){
   let pi = Math.PI
   return diameter * pi * hoogte1
}

let inhoudK = inhoudblokje(10, 5);
console.log(inhoudK); 

function driehoek(lengte2, hoogte2){
   let l2 = Math.pow(lengte2,2)
   return Math.pow(hoogte2,2) + l2
}

let drie = driehoek(10,20);
console.log(drie)

function nummers(one,two,three,four,five,six,seven){
   let gemmidelde = one + two + three + four + five + six + seven
   return gemmidelde / 7
}

let gemmidelde = nummers(2,6,4,3,7,2,5)
console.log(gemmidelde)
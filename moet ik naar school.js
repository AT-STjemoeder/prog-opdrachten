const vandaag = new Date();
const huidigedag = vandaag.getDay();

if (huidigedag === 0){
    console.log("het is zondag lekker uitslapen")
 } else if (huidigedag === 6){
    console.log("het is zaterdag lekker uitslapen")
 }
    else{
        console.log("we moeten naar scorro")
    }
var score = 0;
let getal1;
let getal2;
function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

getal1 = showRandomNumber1();

function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();

function geefAntwoord(antwoord){
getal1= document.querySelector(".getal1").innerHTML;
getal2= document.querySelector(".getal2").innerHTML;
score= document.querySelector(".score").innerHTML;

if(getal1>getal2 && antwoord == 'hoger'){
    score= score -1+2;
    document.querySelector(".score").innerHTML=score;
    document.querySelector("body").style.backgroundColor="green";

}else if(getal1<getal2 && antwoord == 'hoger'){
    score= score -1;
    document.querySelector(".score").innerHTML=score;
    document.querySelector("body").style.backgroundColor="red";
}
if(getal1<getal2 && antwoord == 'lager'){
    score= score -1+2;
    document.querySelector(".score").innerHTML=score;
    document.querySelector("body").style.backgroundColor="green";
    
}else if(getal1>getal2 && antwoord == 'lager'){
    score= score -1;
    document.querySelector(".score").innerHTML=score;
    document.querySelector("body").style.backgroundColor="red";
}
showRandomNumber1();
showRandomNumber2();
}

/*function telopscore(){
   telops= document.querySelector(".score").innerHTML=score-1+2;
   min = document.querySelector(".score").innerHTML=score-1;
   if(getal1>getal2 || getal1<getal2 == true){
       return telops;
   }else{
      return min;
   }
}
telop = telopscore();*/
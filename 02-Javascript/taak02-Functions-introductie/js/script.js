function Alertbox(){
    alert("Hi!, Alertbox");
}
Alertbox();

function Prompt(){
    console.log(prompt());
}
Prompt();

function Confirmbox(){
    tekst=confirm("ok,danNiet");
if ( tekst == true) {
   let text1 = 'Ok';
   console.log(text1);
}
else{
    let text2 ='dan niet';
    console.log(text2);
}

}
Confirmbox();
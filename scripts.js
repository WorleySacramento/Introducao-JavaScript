
// Se a Hora estiver entre 06:00 até 12:00 ;Bom Dia!
// Se Estiver entre 12:00 até as 18:00 ;Boa Tarde!
// caso contrário ;Boa noite!

let hora = 10;

if (hora > 6 && hora < 12) {
    // codigo a ser executado
    console.log("Bom Dia!!")
}

else if (hora > 12 && hora < 18) {
    // codigo a ser executado
}   console.log("Boa Tarde!!")

else {
    // codigo a ser executado
    console.log("Boa Noite!!")
};
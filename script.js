function timeToString(time) {
    // Conversão do valor da variável 'time' em horas
    let diffInHrs = time / 3600000;
    // Arrendondamento do resultado da conversão das horas de número fracionado em inteiro
    let hh = Math.floor(diffInHrs);
    // Conversão da dízima do resultado em horas e convertendo em minutos
    let diffInMin = (diffInHrs - hh) * 60;
    // Arrendondamento do resultado da conversão dos minutos de número fracionado em inteiro
    let mm = Math.floor(diffInMin);
    // Conversão da dízima do resultado em minutos e convertendo em segundos
    let diffInSec = (diffInMin - mm) * 60;
    // Arrendondamento do resultado da conversão em segundos de número fracionado em inteiro
    let ss = Math.floor(diffInSec);


    //Uso de padStart() para usar dois dígitos
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
}



// Uso da função Click e EventListener para funcionalidade dos botões do cronômetro
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
playButton.addEventListener("click", pause);
playButton.addEventListener("click", reset);
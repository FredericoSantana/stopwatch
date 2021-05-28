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

    // Para ser mais dinâmico, mostrar cálculo para milisegundos
    let diffInMs = (diffInSec - ss) * 100; //Multiplica-se por 100 para mostrar apenas dois dígitos
    let ms = Math.floor(diffInMs);

    //Uso de padStart() para usar dois dígitos
    //let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

//separação da lógica para mostrar o resultado no HTML para uma função própria para melhorar a leitura
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

// - Criação das variáves startTime e elapsedTime
// - Função para armazenar Date.now() na variável startTime
// - Uso da setInterval para definir elapsedTime como a diferença entre Date.now() renovado a cada 1000 milisegundos e startTime
// - Uso do innerHTML para mostrar o resultado no HTML
let startTime;
let elapsedTime;
function start() {
    startTime = Date.now();
    setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10); // renova a cada 10 milisegundos 
    //substituição do botão 'play' pelo 'pause'
    showButton("PAUSE");
}

// Função para os botões 'play' e 'pause'
function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}

// Uso da função Click e EventListener para funcionalidade dos botões do cronômetro
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
playButton.addEventListener("click", pause);
playButton.addEventListener("click", reset);
function createImageResponse(imageUrl, response) {
    return { imageUrl, response };
}

const imageResponses = [
    createImageResponse("./images/Eritropoese/Eritroblasto basófilo Fg1.png", "Eritroblasto basófilo (seta), eritroblasto policromático (duas setas), eritroblasto ortocromático (seta tracejada)."),
    createImageResponse("./images/Eritropoese/Eritroblasto Basófilo Fg2.png", "Eritroblasto basófilo (seta) e eritroblasto ortocromático (seta tracejada)."),
    createImageResponse("./images/Eritropoese/Eritroblasto ortocromático FG1.png", "Eritroblasto ortocromático (seta)."),
    createImageResponse("./images/Eritropoese/Eritroblasto Ortocromático FG2.png", "Eritroblasto ortocromático (seta)."),
    createImageResponse("./images/Eritropoese/Eritroblasto Ortocromático FG3.png", "Eritroblasto ortocromático (seta)."),
    createImageResponse("./images/Eritropoese/Eritroblasto Ortocromático FG4.png", "Eritroblasto ortocromático expelindo núcleo (seta)"),
    createImageResponse("./images/Eritropoese/Eritroblasto Policromático FG1.png", "Eritroblasto policromático (seta)"),
    createImageResponse("./images/Eritropoese/Eritroblasto Policromático FG2.png", "Eritroblasto policromático (seta) ao lado de um monócito."),
    createImageResponse("./images/Eritropoese/Eritrócitos-Hemácias FG1.png", "Hemácias normocrômicas e normocíticas - aumento de 1000x."),
    createImageResponse("./images/Eritropoese/Eritrócitos-Hemácias FG2.png", "Hemácias normais com alterações artefatuais (hemácias crenadas - sangue em contato com EDTA do tubo de coleta por muito tempo antes da confecção do esfregaço) - aumento de 1000x."),
    createImageResponse("./images/Eritropoese/Eritrócitos-Hemácias FG3.png", "Hemácias normais (em aumento de 400x)"),
    createImageResponse("./images/Eritropoese/proeritroblasto.jpg", "Proeritroblasto"),
    createImageResponse("./images/Eritropoese/Reticulócito FG1.png", "Reticulócitos em coloração azul de cresil brilhante, mostrando os restos de RNA."),
    createImageResponse("./images/Eritropoese/Reticulócito FG2.png", "Reticulócitos e hemácias em coloração azul de cresil brilhante."),
    createImageResponse("./images/Eritropoese/Reticulócito FG3.png", "Reticulócito (1000x).")
];



const imageElement = document.getElementById("image");
const responseElement = document.getElementById("response");
const showAnswerButton = document.getElementById("show-answer");
const nextImageButton = document.getElementById("next-image");

let currentImageIndex = -1;

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function showImage(index) {
    const { imageUrl } = imageResponses[index];
    imageElement.src = imageUrl;
    currentImageIndex = index;
    clearResponse();
}

function showRandomImage() {
    const randomIndex = getRandomIndex(imageResponses.length);
    showImage(randomIndex);
}

function clearResponse() {
    responseElement.textContent = "";
}

function showAnswer() {
    if (currentImageIndex !== -1) {
        const { response } = imageResponses[currentImageIndex];
        responseElement.textContent = response;
    }
}

showRandomImage();

showAnswerButton.addEventListener("click", showAnswer);

nextImageButton.addEventListener("click", () => {
    clearResponse();
    showRandomImage();
});


document.getElementById('mostrarConteudo').addEventListener('click', function() {
    document.getElementById('telaInicial').style.display = 'none'; // Esconde a tela inicial
    document.getElementById('conteudoDesejado').style.display = 'block'; // Mostra o conteúdo desejado
});




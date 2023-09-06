import { connectAPI } from "./connectAPI.js" //Always put the ".js" at the end!!!

const formField = document.querySelector('[data-formulario]')
formField.addEventListener('submit', event => sendFormValues(event))

async function sendFormValues(event) {
    event.preventDefault()

    // Values Required:
    const title = document.getElementById('titulo').value;
    const url = document.getElementById('url').value;
    const logo = document.getElementById('imagem').value;
    const viewers = (Math.floor(Math.random() * (15 - 3 + 1)) + 3).toString();

    // API Function:
    await connectAPI.postVideo(title, viewers, url, logo);

    //Fulfilled Page:
    window.location.href = './envio-concluido.html'

}


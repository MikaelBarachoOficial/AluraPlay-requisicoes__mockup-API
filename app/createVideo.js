import { connectAPI } from "./connectAPI.js" //Always put the ".js" at the end!!!

const formField = document.querySelector('[data-formulario]')
formField.addEventListener('submit', event => sendFormValues(event))

async function sendFormValues(event) {
    try {
        event.preventDefault()

        // Values Required:
        const title = document.getElementById('titulo').value;
        const url = document.getElementById('url').value;
        const logo = document.getElementById('imagem').value;
        const viewers = (Math.floor(Math.random() * (15 - 3 + 1)) + 3).toString();

        const urlRegex = /https?:\/\/www\.youtube\.com\/embed\/([\w\-]+)/

        if(!urlRegex.test(url)) {
            throw new Error("Insira uma URL válida.")
        } else {
            // API Function:
            const connection = await connectAPI.postVideo(title, viewers, url, logo);
            if(connection) {
                //Fulfilled Page:
                window.location.href = './envio-concluido.html'
            }
            
        }

    } catch(err) {
        alert(err)
    }
}


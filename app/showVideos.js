import { connectAPI } from "./connectAPI.js"

const videosField = document.querySelector('[data-videos]');
const searchField = document.querySelector('[data-searchField]')
const searchBtn = document.querySelector('[data-searchBtn]')

function createVideoCard(title, viewers, url, icon) {

    const card = document.createElement('li');
    card.className = 'videos__item';
    
    card.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${title}}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <h3>${title}</h3>
        <img src="${icon}" alt="logo do canal">
        <p>${viewers}</p>
    </div>`;

    return card

}

async function fillTheVideosField(direction, searchFieldContent) {

    videosField.innerHTML = ''

    try {

        let listAPI = await direction

        if (listAPI.length > 0) {
            listAPI.forEach(video => {
                videosField.appendChild(createVideoCard(video.titulo, video.descricao, video.url, video.imagem))
            })
        } else {
            videosField.innerHTML = `<h2 class="mensagem__titulo">Não foram encontrados resultados com ${searchFieldContent}.</h2>`
        }
        
    } catch (error) {
        videosField.innerHTML = `<h2 class="mensagem__titulo">O servidor está fora do ar. Por favor, tente novamente mais tarde.</h2>`
    }

}       

fillTheVideosField(connectAPI.fetchVideoListAPI())

searchBtn.addEventListener('click', event => {
    fillTheVideosField(connectAPI.searchVideo(searchField.value), searchField.value)
})

// async function fillWithSearchedVideos() {
//     let listAPI = await connectAPI.fetch
// }
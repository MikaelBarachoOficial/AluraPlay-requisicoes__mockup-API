import { connectAPI } from "./connectAPI.js"

const videosField = document.querySelector('[data-videos]');

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

async function fillTheVideosField() {
    let listAPI = await connectAPI.fetchVideoListAPI();

    console.log(listAPI)

    listAPI.forEach(video => {
        videosField.appendChild(createVideoCard(video.titulo, video.descricao, video.url, video.imagem))
    })

}

fillTheVideosField()
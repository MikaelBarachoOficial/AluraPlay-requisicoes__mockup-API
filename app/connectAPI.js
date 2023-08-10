async function fetchVideoListAPI() {

    const response = await fetch('http://localhost:3000/videos');
    const responseJSON = await response.json();

    return responseJSON

}

async function postVideo(title, viewers, url, logo) {

    const connection = await fetch('http://localhost:3000/videos', {
        method: "POST", // This is a method that allows you to post videos to the JSON file.
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${viewers} visualizações`,
            url: url,
            imagem: logo
        })
    })

    const connectionJSON = await connection.json()

    return connectionJSON
}

export const connectAPI = {
    fetchVideoListAPI, // to fetch for the videos to the API.
    postVideo // to post videos to the API.
}
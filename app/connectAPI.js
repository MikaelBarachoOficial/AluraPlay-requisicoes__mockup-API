async function fetchVideoListAPI() { // 'GET request'

        const response = await fetch('http://localhost:3000/videos'); // This is the default GET request, which method is "GET".
        const responseJSON = await response.json();

        return responseJSON

    

}

async function postVideo(title, viewers, url, logo) { // 'POST request'

        const connection = await fetch('http://localhost:3000/videos', {
            method: "POST",                        // The 'method' property specifies that this is a 'POST request', which is used to send data to the server.
            headers: {                             // The 'headers' property specifies the type of content being sent in the requesty body.
                "Content-type": "application/json" // In this case, it's JSON data.
            },
            body: JSON.stringify({
                titulo: title,
                descricao: `${viewers} mil visualizações`,
                url: url,
                imagem: logo
            })
        })

        const connectionJSON = await connection.json()

        return connectionJSON

}

async function searchVideo(contentSearch) {
  
        const response = await fetch(`http://localhost:3000/videos?q=${contentSearch}`)
        const responseJSON = await response.json()
        console.log(responseJSON)
        return responseJSON
    
}

export const connectAPI = {
    fetchVideoListAPI, // to fetch for the videos to the API.
    postVideo, // to post videos to the API.
    searchVideo // to fetch only the requested videos.
}
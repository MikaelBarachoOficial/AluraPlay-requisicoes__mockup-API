async function fetchVideoListAPI() {

    const response = await fetch('http://localhost:3000/videos');
    const responseJSON = await response.json();

    console.log(responseJSON)

}

fetchVideoListAPI()
const key = 'RQRz0UNoxKfNLwh5msP5jjKmM5QrofnI'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`)
    .then((response) => console.log(response.json()))
    .catch((error) => console.log(error))
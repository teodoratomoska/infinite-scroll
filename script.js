// Unsplash API
const apiKey = '6Hab0BKD59VixPbslzED1dEsHHI1_shnuv-UfbNQ4As';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&orientation=landscape`;

//  Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch(error) {
        //Catch Error Here
    }
}

// On Load 
getPhotos();

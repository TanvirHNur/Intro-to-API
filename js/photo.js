function photo (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => updatePhoto(data))
}

photo()

function updatePhoto(photos){
    const photosContainer = document.getElementById('photos');
    for(const photo of photos){
        const img = document.createElement('img');
        img.src = 'images/img.jpg';
        img.src = photo.url;
        photosContainer.appendChild(img)
    }
}




console.log('connected with js file')
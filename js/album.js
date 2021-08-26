function addAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => getAlbum(data))
}

function getAlbum(albums){
    // console.log(album)
    const albumsContainer = document.getElementById('albums');
    for(const album of albums){
        const p = document.createElement('p');
        p.innerText = album.title;
        p.style.textAlign = 'center'
        albumsContainer.appendChild(p)
    }
}
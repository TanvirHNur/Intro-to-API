function addComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => comments(data))
}

function comments(comments){
    // console.log(comments)
    const commentsContainer = document.getElementById('comments')
    for(const comment of comments){
        const p = document.createElement('p')
        p.innerText = comment.body;
        p.classList = 'comment'
        p.style.textAlign = 'center';
        commentsContainer.appendChild(p)
    }
}
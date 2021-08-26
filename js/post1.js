function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => updatePost(data))
}
// post()
function updatePost(posts){
   const postContainer = document.getElementById("posts");
   for(const post of posts){
    //    console.log(post)
    const div = document.createElement('div');
    div.classList = 'post'
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    postContainer.appendChild(div);
   } 
}
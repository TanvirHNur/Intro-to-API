function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}


function displayUsers(data){
    // console.log(data)
    const ul = document.getElementById('users')
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = 'news'
        // `Name: ${user.name}  //////Email: ${user.email}`
        ul.appendChild(li)
    }
}
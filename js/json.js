// javascirpt Object notation 
// JSON
const user = {
    id: 292,
    name: 'amir',
    job: 'teacher'
}

const stringified =JSON.stringify(user)
// console.log(user);
// console.log(stringified)


const shop ={
    name: 'alia shop',
    address: 'Dhaka',
    profit: 1200,
    products: ['laptop', 'phone', 'blender'],
    isExpensive: false,
    owner: {
        name: 'rakib', 
        age: 34
    },
    employ: 20
}

const shopString = JSON.stringify(shop);
// console.log(shop)
console.log(shopString);
const converting = JSON.parse(shopString);
console.log(converting)
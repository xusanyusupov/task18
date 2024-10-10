let API = "https://jsonplaceholder.typicode.com/posts"
let wrapper = document.querySelector('.wrapper')

async function getPOST(data){
    let el = await fetch(data)
    el
    .json()
    .then(res => createdCARD(res))
    .catch(er => console.log(er))
}
getPOST(API)
function createdCARD(obj) {
    obj.forEach(item => {
        let card = document.createElement("div")
        card.classList.add('card')
        card.innerHTML = `
            <b class="center">${item.title}</b>
            <p>${item.body}</p>
        `
        wrapper.appendChild(card)
    })
}
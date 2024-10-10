let url = "https://jsonplaceholder.typicode.com/albums"
let wrapper = document.querySelector('.wrapper')
async function getALBUM(data){
    let el =  await fetch(data)
    el.json()
    .then(res => createdCARD(res))
    .catch(err => console.log(err))
}
getALBUM(url)

function createdCARD(albums){
    albums.forEach(item => {
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <div class="flex"><b class="center">User-id: ${item.userId}</b> <b class="center">ID: ${item.id}</b> </div>
        <p>${item.title}</p>
        `
        wrapper.appendChild(div)
    })
}
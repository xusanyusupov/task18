let url = "https://jsonplaceholder.typicode.com/users"
let wrapper = document.querySelector('.wrapper')

async function getUSER(userDATA){
    let el = await fetch(userDATA)
    el
    .json()
    .then(res => createdUserCard(res))
    .catch(err => console.log(err))
}
getUSER(url)

function createdUserCard(user_info){
    user_info.forEach(item => {
        let div = document.createElement("div")
        div.classList.add("card","padd")
        div.innerHTML = `
        <div title="name and username" class="flex"><b>${item.name}</b> <b>${item.username}</b> </div>
        <b title="email">${item.email}</b>
        <b title="number" class="center">${item.phone}</b>
        <p title="street">${item.address.street} -<p title="street">${item.address.suite} -</p>  <p title="street">${item.address.city} -</p></p>
        <b title="company name" class="center">${item.company.name}</b>
        `
        wrapper.appendChild(div)
    })
}

const searchInput = document.querySelector("[data-search]")

let users = []
let husers = []

//! Searching and displaying the search results
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    // For tshirts
    if (value !== "") {
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.tags.toLowerCase().includes(value)
            user.element.classList.toggle("hide", !isVisible)
        })
    }
    // For hoodies
    if (value !== "") {
        husers.forEach(huser => {
            const ishVisible = huser.hname.toLowerCase().includes(value) || huser.htags.toLowerCase().includes(value)
            huser.helement.classList.toggle("hide", !ishVisible)
        })
    }
    else if (value == "") {
        users.forEach(user => {
            user.element.classList.add("hide")
        })
        husers.forEach(huser => {
            huser.helement.classList.add("hide")
        })
    }
})






//! Inserting cards into DOM using products.JSON file
// for tshirts
fetch('./data.json')
    .then((response) => response.json())
    .then(data => {
        users = data.tshirt.map(product => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const productImage = card.querySelector("[product-image]")
            const header = card.querySelector('[data-name]')
            const imgurl = product.url
            productImage.innerHTML = `<img src="products/images/${imgurl}.png" alt="${imgurl}">`
            header.textContent = product.name
            searchResult.append(card)
            return { name: product.name, tags: product.tags, element: card }
        });
    });

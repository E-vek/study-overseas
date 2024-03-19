console.log("scripts loaded")

const userCardTemplate = document.querySelector("[data-user-template]")
const searchResult = document.querySelector("[search-results]")
const searchInput = document.querySelector("[data-search]")

let usauniversities = []
let ukuniversities = []


//! rendering results into DOM using data.JSON file

    //! USA

    fetch('./data.json')
    .then((response) => response.json())
    .then(data => {
        usauniversities = data.usa.map(university => {
            const result = userCardTemplate.content.cloneNode(true).children[0]
            const uniName = result.querySelector("[uni-name]")
            let location = result.querySelector('[uni-location]')
            const uniurl = university.url
            location.textContent = university.location
            uniName.textContent = university.name
            searchResult.append(result)
            return { name: university.name, location: university.location, country:location , element: result }
        });
    });

    //! UK

    // fetch('./data.json')
    // .then((response) => response.json())
    // .then(data => {
    //     usauniversities = data.usa.map(university => {
    //         const result = userCardTemplate.content.cloneNode(true).children[0]
    //         const uniName = result.querySelector("[uni-name]")
    //         let location = result.querySelector('[uni-location]')
    //         const uniurl = university.url
    //         let unicountry = ", USA"
    //         location.textContent = university.location
    //         location.textContent = location.textContent + unicountry
    //         uniName.textContent = university.name
    //         searchResult.append(result)
    //         return { name: university.name, location: university.location, country:unicountry , element: result }
    //     });
    // });




    // //! Searching and displaying the search results
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    // For tshirts
    if (value !== "") {
        usauniversities.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.location.toLowerCase().includes(value)
            user.element.classList.toggle("hide", !isVisible)
        })
    }
    // For hoodies
    if (value !== "") {
        ukuniversities.forEach(huser => {
            const ishVisible = huser.hname.toLowerCase().includes(value) || huser.location.toLowerCase().includes(value)
            huser.helement.classList.toggle("hide", !ishVisible)
        })
    }
    else if (value == "") {
        usauniversities.forEach(user => {
            user.element.classList.add("hide")
        })
        ukuniversities.forEach(huser => {
            huser.helement.classList.add("hide")
        })
    }
})
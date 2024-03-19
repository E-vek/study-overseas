console.log("scripts loaded")

const userCardTemplate = document.querySelector("[data-user-template]")
const searchResult = document.querySelector("[search-results]")
const searchInput = document.querySelector("[data-search]")

let usauniversities = []
let ukuniversities = []
let ausuniversities = []


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

    fetch('./data.json')
    .then((response) => response.json())
    .then(data => {
        ukuniversities = data.uk.map(university => {
            const result = userCardTemplate.content.cloneNode(true).children[0]
            const uniName = result.querySelector("[uni-name]")
            let location = result.querySelector('[uni-location]')
            const uniurl = university.url
            location.textContent = university.location
            uniName.textContent = university.name
            searchResult.append(result)
            return { hname: university.name, location: university.location, country:location , element: result }
        });
    });
    
    //! UK

    fetch('./data.json')
    .then((response) => response.json())
    .then(data => {
        ausuniversities = data.australia.map(university => {
            const result = userCardTemplate.content.cloneNode(true).children[0]
            const uniName = result.querySelector("[uni-name]")
            let location = result.querySelector('[uni-location]')
            const uniurl = university.url
            location.textContent = university.location
            uniName.textContent = university.name
            searchResult.append(result)
            return { hname: university.name, location: university.location, country:location , element: result }
        });
    });




    // //! Searching and displaying the search results
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    // For usa
    if (value !== "") {
        usauniversities.forEach(university => {
            const isVisible = university.name.toLowerCase().includes(value) || university.location.toLowerCase().includes(value)
            university.element.classList.toggle("hide", !isVisible)
        })
    }
    // For uk
    if (value !== "") {
        ukuniversities.forEach(university => {
            const ishVisible = university.hname.toLowerCase().includes(value) || university.location.toLowerCase().includes(value)
            university.element.classList.toggle("hide", !ishVisible)
        })
    }
    // For aus
    if (value !== "") {
        ausuniversities.forEach(university => {
            const ishVisible = university.hname.toLowerCase().includes(value) || university.location.toLowerCase().includes(value)
            university.element.classList.toggle("hide", !ishVisible)
        })
    }
    else if (value == "") {
        usauniversities.forEach(user => {
            user.element.classList.add("hide")
        })
        ukuniversities.forEach(huser => {
            huser.element.classList.add("hide")
        })
        ausuniversities.forEach(huser => {
            huser.element.classList.add("hide")
        })
    }
})
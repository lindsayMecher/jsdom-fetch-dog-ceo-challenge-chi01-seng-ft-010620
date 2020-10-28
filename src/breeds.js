const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedsList = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");


const renderBreeds = breedObject => {
    for (const breed in breedObject) {
        breedsList.innerHTML += `<li class="breed-name">${breed}</li>`
        if (breedObject[breed].length > 0) {
            breedObject[breed].forEach(subBreed => {
                let string = `<ul><li class="sub-breed-name">${subBreed}</li></ul>`;
                breedsList.lastChild.innerHTML += string;
            })
        }
    }
}

const fetchBreeds = () => {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => renderBreeds(data["message"]))
}

const changeBreedTextColor = (e) => {
    e.target.style.color = "purple";
}

const filterBreed = e => {
    console.log(e.target.value)
    let letter = e.target.value;
    
}

fetchBreeds();

document.addEventListener("click", (e) => {
    if (e.target.className === "breed-name" || e.target.className === "sub-breed-name") {
        changeBreedTextColor(e);
    }
})

breedDropdown.addEventListener("change", filterBreed)
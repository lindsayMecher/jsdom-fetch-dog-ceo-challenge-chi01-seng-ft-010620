const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedsList = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");
const alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split("");
let breedData;

const assembleLetterOptions = () => {
    alphabetArray.forEach(letter => {
        let option = `<option value="${letter}">${letter}</option>`;
        breedDropdown.innerHTML += option;
    })
}

const renderBreeds = breedObject => {
    breedsList.innerHTML = ``;
    for (const breed in breedObject) {
        breedsList.innerHTML += `<li class="breed-name">${breed}</li>`;
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
        .then(data => {
            breedData = data["message"];
            renderBreeds(breedData);
        })
}

const changeBreedTextColor = (e) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.color = `#${randomColor}`;
}

const filterBreed = e => {
    let letter = e.target.value;
    let newObj = {};
    for (breed in breedData) {
        if (breed[0] === letter) {
            newObj[breed] = breedData[breed];
        }
    }
    renderBreeds(newObj);
}



assembleLetterOptions();
fetchBreeds();



document.addEventListener("click", (e) => {
    if (e.target.className === "breed-name" || e.target.className === "sub-breed-name") {
        changeBreedTextColor(e);
    }
})

breedDropdown.addEventListener("change", filterBreed);
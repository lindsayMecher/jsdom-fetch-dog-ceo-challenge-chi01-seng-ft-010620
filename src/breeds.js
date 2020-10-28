const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedsList = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");
const alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split("");
let breedData;
let breedArray = [];

const assembleLetterOptions = () => {
    alphabetArray.forEach(letter => {
        let option = `<option value="${letter}">${letter}</option>`;
        breedDropdown.innerHTML += option;
    })
}

// const renderBreeds = breedObject => {
//     breedsList.innerHTML = ``;
//     for (const breed in breedObject) {
//         breedsList.innerHTML += `<li class="breed-name">${breed}</li>`;
//         if (breedObject[breed].length > 0) {
//             breedObject[breed].forEach(subBreed => {
//                 let string = `<ul><li class="sub-breed-name">${subBreed}</li></ul>`;
//                 breedsList.lastChild.innerHTML += string;
//             })
//         }
//     }
// }

const renderBreeds = breedArray => {
    breedsList.innerHTML = ``;
    breedArray.forEach(breed => {
        breedsList.innerHTML += `<li class="breed-name">${breed}</li>`;
    })
}

const assembleBreedArray = (breedData) => {
    for (breed in breedData){
        if (breedData[breed].length === 0) {
            breedArray.push(breed)
        } else {
            breedData[breed].forEach(subBreed => {
                breedArray.push(subBreed + ' ' + breed);
            })
        }
    }
}

const fetchBreeds = () => {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            breedData = data["message"];
            assembleBreedArray(breedData);
            renderBreeds(breedArray);
        })
}

const changeBreedTextColor = (e) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.color = `#${randomColor}`;
}

// const filterBreed = e => {
//     let letter = e.target.value;
//     let newObj = {};
//     for (breed in breedData) {
//         if (breed[0] === letter) {
//             newObj[breed] = breedData[breed];
//         }
//     }
//     renderBreeds(newObj);
// }

filterBreed = e => {
    let letter = e.target.value;
    let filteredArray = [];
    breedArray.forEach(breed => {
        if (breed[0] === letter) {
            filteredArray.push(breed);
        }
    })
    renderBreeds(filteredArray);
}


assembleLetterOptions();
fetchBreeds();



document.addEventListener("click", (e) => {
    if (e.target.className === "breed-name" || e.target.className === "sub-breed-name") {
        changeBreedTextColor(e);
    }
})

breedDropdown.addEventListener("change", filterBreed);
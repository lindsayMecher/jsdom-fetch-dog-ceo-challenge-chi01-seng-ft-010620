// declared variables

const dogContainer = document.getElementById("dog-image-container")
const breedContainer = document.getElementById("dog-breeds")
const breedDropdown = document.getElementById("breed-dropdown")
let letterArray = ['a', 'b', 'c', 'd']
let dogData
let dogBreeds
let dogBreedsArray
// let dogDataBreeds = dogData['message']
// defined functions

function fetchDogs() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then( response => response.json() )
    .then( dogImageData => renderDog(dogImageData.message) )
};

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then( response => response.json() )
    .then( dogBreedData => {
      renderDogBreed(dogBreedData.message)
      dogData = dogBreedData;
      dogBreeds = dogData['message']
      dogBreedsArray = Object.keys(dogBreeds)
        } );
}

// const result = words.filter(word => word.length > 6);
function filterABreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'a');
    while (breedContainer.lastChild) {
    breedContainer.lastChild.remove()
  };
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}

function filterBBreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'b');
    while (breedContainer.lastChild) {
    breedContainer.lastChild.remove()
  };
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}

function filterCBreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'c');
    while (breedContainer.lastChild) {
    breedContainer.lastChild.remove()
  };
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}

function filterDBreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'd');
    while (breedContainer.lastChild) {
    breedContainer.lastChild.remove()
  };
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}


// function fetchABreeds(dogBreedData) {
//   for (let dogBreed in dogBreedData) {
//     console.log(dogBreed)
//   }
//
// }


function renderDogBreed(dogBreedData) {
  for (let dogBreed in dogBreedData) {
    const li = document.createElement('li')
    li.innerText = dogBreed;
    breedContainer.appendChild(li)
  }
}


function renderDog(dogImageData) {
  dogImageData.forEach( dog => {
    const img = document.createElement('img')
    img.src = dog
    dogContainer.appendChild(img)
  })
}

function handleBreedClick(event) {
  if (event.target.tagName === "LI") {
      if (event.target.style.color === 'blue') {
        event.target.style.color = 'pink'
      } else
        event.target.style.color = 'blue'
  }
}

function handleBreedDropdown(event) {
  if (event.target.value === 'a') {
    filterABreeds(dogBreedsArray)
  } else if (event.target.value === 'b') {
    filterBBreeds(dogBreedsArray)
  } else if (event.target.value === 'c') {
    filterCBreeds(dogBreedsArray)
  } else {
    filterDBreeds(dogBreedsArray)
  }
}

// event listeners

breedContainer.addEventListener('click', handleBreedClick)
breedDropdown.addEventListener('change', handleBreedDropdown)



// invoked functions

fetchDogs()
fetchBreeds()

// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
//
// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet

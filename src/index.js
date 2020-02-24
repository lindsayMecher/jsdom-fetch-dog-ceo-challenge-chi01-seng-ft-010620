// declared variables

const dogContainer = document.getElementById("dog-image-container")
const breedContainer = document.getElementById("dog-breeds")
const breedDropdown = document.getElementById("breed-dropdown")
const option = document.createElement('option')
breedDropdown.appendChild(option)
option.innerHTML = '<option value="all">all dogs</option>'

// declared variables for hoisting
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
      dogBreeds = dogBreedData['message']
      dogBreedsArray = Object.keys(dogBreeds)
      renderDogBreed(dogBreedData.message)
        } );
}

function filterABreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'a');
    clearContainer()
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}

function filterBBreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'b');
    clearContainer()
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}

function filterCBreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'c');
    clearContainer()
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}

function filterDBreeds(dogBreedsArray) {
  const filteredArray = dogBreedsArray.filter( breed => breed[0] === 'd');
    clearContainer()
  filteredArray.forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
  })
}

function renderDogBreed(dogBreedData) {
  clearContainer()
  dogBreedsArray.sort().forEach( breed => {
    const li = document.createElement('li')
    li.innerText = breed;
    breedContainer.appendChild(li)
  })
  // for (let dogBreed in dogBreedData) {
  //   const li = document.createElement('li')
  //   li.innerText = dogBreed;
  //   breedContainer.appendChild(li)
  // }
}


function renderDog(dogImageData) {
  dogImageData.forEach( dog => {
    const img = document.createElement('img')
    img.src = dog
    dogContainer.appendChild(img)
  })
}

function clearContainer(dogContainer) {
  while (breedContainer.lastChild) {
  breedContainer.lastChild.remove()
  };
}

function handleBreedClick(event) {
  if (event.target.tagName === "LI") {
      if (event.target.style.color === 'blue') {
        event.target.style.color = 'white'
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
  } else if (event.target.value === 'd') {
    filterDBreeds(dogBreedsArray)
  } else {
    renderDogBreed(dogBreeds)
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

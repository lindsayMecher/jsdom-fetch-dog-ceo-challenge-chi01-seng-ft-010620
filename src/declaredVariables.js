const dogContainer = document.getElementById("dog-image-container")
const breedContainer = document.getElementById("dog-breeds")
const breedDropdown = document.getElementById("breed-dropdown")
const option = document.createElement('option')
breedDropdown.appendChild(option)
option.innerHTML = '<option value="all">all dogs</option>'
let letterArray = ['a', 'b', 'c', 'd']
let dogData
let dogBreeds
let dogBreedsArray

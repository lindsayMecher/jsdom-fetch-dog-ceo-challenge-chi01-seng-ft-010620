// DEFINED FUNCTIONS

// using the alphabet array defined in the declaredVariables file
// go over each letter in the alphabet and create and option
// add each of those options to the select dropdown
const assembleLetterOptions = () => {
    // iterate over each element in the alphabet array
    alphabetArray.forEach(letter => {
        //create a variable with the option tag with the value of the current letter
        // the text rendered in the option tag is the letter itself
        let option = `<option value="${letter}">${letter}</option>`;
        // now find the breed dropdown and add onto its existing innerHTML using +=
        // the += is saying "keep all the existing HTML, but tack this onto the end of it"
        breedDropdown.innerHTML += option;
    })
}

// this function is for accepting an array of breeds
// then rendering them to the DOM
const renderBreeds = breedArray => {
    // reset the innerHTML of the breedsList to an empty string
    breedsList.innerHTML = ``;
    // iterate through the array of breeds
    breedArray.forEach(breed => {
        // for each breed, update the innerHTML of breeds list
        // make an LI tag for each breed and give it a class name of "breed-name"
        breedsList.innerHTML += `<li class="breed-name">${breed}</li>`;
    })
}

// this function takes in the object of breeds from the fetch request
// then it converts it into an array
const assembleBreedArray = (breedData) => {
    // for each key in the breedData Object
    // create a variable for each key named breed
    for (breed in breedData){
        // if the breedData["beagle"] points to an empty array of subbreeds
        if (breedData[breed].length === 0) {
            // push this breed name into the breedArray
            breedArray.push(breed)
            // if the breed does contain subbreeds
        } else {
            // for each breed in the subbreed array
            breedData[breed].forEach(subBreed => {
                // make a string concatenating the subbreed's name with the breeds name
                // then push that string into the breedArray
                breedArray.push(subBreed + ' ' + breed);
            })
        }
    }
}

// this function retrieves some data from an external source
const fetchBreeds = () => {
    // make a get request to the breedUrl
    fetch(breedUrl)
        // then we receive a promise from this server
        .then(resp => resp.json())
        // when the promise is received and converted to json
        // now we have a data structure that we can handle with JavaScript code
        .then(data => {
            // set the breedData variable equal to the data from the API
            breedData = data["message"];
            // run the assembleBreedArray function, send the breedData through as argument
            assembleBreedArray(breedData);
            // run the renderBreeds function with an argument of the breedArray
            renderBreeds(breedArray);
        })
}

// a function for changing the color of the item that was clicked
const changeBreedTextColor = (e) => {
    // create a random hex color
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    // set the style.color of the event's target(clicked item)
    // equal to the random color generated
    e.target.style.color = `#${randomColor}`;
}


// a function for filtering the breeds by selected letter
const filterBreed = e => {
    // save the target value to a variable
    let letter = e.target.value;
    // create an empty array
    let filteredArray = [];
    // for each breed in the breed array
    breedArray.forEach(breed => {
        // if the breed's first letter is the same as the letter selected
        if (breed[0] === letter) {
            // push this breed into the empty array
            filteredArray.push(breed);
        }
    })
    // run the renderBreeds function with this filtered array as an argument
    renderBreeds(filteredArray);
}

// INVOKED FUNCTIONS

assembleLetterOptions();
fetchBreeds();


// EVENT LISTENERS

// listen for a click event on the entire document
document.addEventListener("click", (e) => {
    // if the node that was clicked has a class name of "breed-name" or "sub-breed-name"
    if (e.target.className === "breed-name" || e.target.className === "sub-breed-name") {
        // run this function passing the event itself as an argument
        changeBreedTextColor(e);
    }
})

// add a change event listener for the breedDropdown element
// when a letter is selected, run the filterBreed function
breedDropdown.addEventListener("change", filterBreed);
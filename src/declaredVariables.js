// variables to be used throughout the application
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedsList = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");
// construct an alphabet array out of a string of characters
const alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split("");
let breedData;
let breedArray = [];
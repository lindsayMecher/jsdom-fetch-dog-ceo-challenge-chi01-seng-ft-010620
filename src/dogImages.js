// find the image container
const imageContainer = document.getElementById("dog-image-container");

// the API image endpoint
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// render the images to the page
const renderImages = imageData => {
    // for each image in the array
    imageData.forEach(image => {
        // create an image tag with the image url itself interpolated into the src attribute
        let imageTag = `<img src="${image}" alt="" style="width: auto; height: 200px;">`
        // update the innerHTML of the image container to add on the created image tag
        imageContainer.innerHTML += imageTag
    })
}

// fetch images from the URL
const fetchImages = () => {
    // make a fetch request to the imgUrl
    fetch(imgUrl)
        .then(resp => resp.json())
        // receive the data and then send that as an argument to the renderImages function
        .then(data => renderImages(data["message"]))
}

// run the fetch images function
fetchImages();
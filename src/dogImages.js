const imageContainer = document.getElementById("dog-image-container");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const renderImages = imageData => {
    imageData.forEach(image => {
        let imageTag = `<img src="${image}" alt="" style="width: auto; height: 200px;">`
        imageContainer.innerHTML += imageTag
    })
}

const fetchImages = () => {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => renderImages(data["message"]))
}

fetchImages();
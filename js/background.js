const images = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `/images/${chosenImage}`
console.log(bgImage.src)

document.querySelector("body").style.backgroundImage = `url(${bgImage.src})`;
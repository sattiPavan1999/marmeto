let arr = [];

function sendPhotos(image) {
    arr.push(image);
}

let style1 = document.getElementById("style1");
let img = document.createElement("img");
img.src = arr[0];
img.classList.add("first");
style1.appendChild(img);

let img2 = document.getElementById("img2");
img2.src = arr[1];

let url = "https://products-api-2ttf.onrender.com/api/products";
let options = {
    method: "GET"
};

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        for (let every of jsonData) {
            sendPhotos(every.image);
        }
    });

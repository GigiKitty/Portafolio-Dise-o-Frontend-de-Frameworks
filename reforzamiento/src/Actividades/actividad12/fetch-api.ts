const API_KEY = '';

const myRequest = fetch(
    ``
);

myRequest
.then((response) => response.json())
.then((data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement);
})
.catch((err) => {
    console.error(err);
})
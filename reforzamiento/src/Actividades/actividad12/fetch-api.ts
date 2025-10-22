import type { GiphyRandom, Gif } from '../../data/giphy.response.ts'

const API_KEY = 'fSOqdpaPGmIbG1PLr0bx7GBQi31owRmZ';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src =url;

    document.body.append(imgElement);
};

myRequest
.then((response) => response.json())
.then(({ data }: GiphyRandom) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
})
.catch((err) => {
    console.error(err);
})


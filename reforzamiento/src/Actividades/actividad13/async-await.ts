import type { GiphyRandom, Gif } from "../../data/giphy.response";

const API_KEY = 'fSOqdpaPGmIbG1PLr0bx7GBQi31owRmZ';

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src =url;

    document.body.append(imgElement);
};
const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }: GiphyRandom = await response.json();

    return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM);
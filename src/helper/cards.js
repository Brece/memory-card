import uniqid from 'uniqid';

import imageURL from '../assets/logo.png';

const cardsLibrary = [
    {
        url: imageURL,
        text: '1',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: '2',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: '3',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: '4',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: '5',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: '6',
        clicked: false,
        id: uniqid()
    }
];

// const randomNumber = () => Math.floor(Math.random() * cardsLibrary.length);

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export { cardsLibrary, shuffleArray };

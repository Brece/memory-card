import uniqid from 'uniqid';

import imageURL from '../assets/logo.png';

const cardsLibrary = [
    {
        url: imageURL,
        text: 'xxx',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: 'yyy',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: 'zzz',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: 'xxx',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: 'yyy',
        clicked: false,
        id: uniqid()
    },
    {
        url: imageURL,
        text: 'zzz',
        clicked: false,
        id: uniqid()
    }
];

const randomNumber = () => Math.floor(Math.random() * cardsLibrary.length);

export { cardsLibrary, randomNumber };

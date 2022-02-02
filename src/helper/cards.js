import uniqid from 'uniqid';

import camel from '../assets/camel.png';
import lizard from '../assets/lizard.png';
import dog from '../assets/dog.png';
import crocodile from '../assets/crocodile.png';
import chicken from '../assets/chicken.png';
import spider from '../assets/spider.png';
import shark from '../assets/shark.png';
import mouse from '../assets/mouse.png';
import wolf from '../assets/wolf.png';
import greatEgret from '../assets/great-egret.png';
import elephant from '../assets/elephant.png';
import lion from '../assets/lion.png';

const cardsLibrary = [
    {
        url: camel,
        text: 'Camel',
        clicked: false,
        id: uniqid()
    },
    {
        url: lizard,
        text: 'Lizard',
        clicked: false,
        id: uniqid()
    },
    {
        url: dog,
        text: 'Dog',
        clicked: false,
        id: uniqid()
    },
    {
        url: crocodile,
        text: 'Crocodile',
        clicked: false,
        id: uniqid()
    },
    {
        url: chicken,
        text: 'Chicken',
        clicked: false,
        id: uniqid()
    },
    {
        url: spider,
        text: 'Spider',
        clicked: false,
        id: uniqid()
    },
    {
        url: shark,
        text: 'Shark',
        clicked: false,
        id: uniqid()
    },
    {
        url: mouse,
        text: 'Mouse',
        clicked: false,
        id: uniqid()
    },
    {
        url: wolf,
        text: 'Wolf',
        clicked: false,
        id: uniqid()
    },
    {
        url: greatEgret,
        text: 'Great-Egret',
        clicked: false,
        id: uniqid()
    },
    {
        url: elephant,
        text: 'Elephant',
        clicked: false,
        id: uniqid()
    },
    {
        url: lion,
        text: 'Lion',
        clicked: false,
        id: uniqid()
    }
];

// const randomNumber = () => Math.floor(Math.random() * cardsLibrary.length);

const shuffleArray = (array) => {
    let shuffledArray = array;
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export { cardsLibrary, shuffleArray };

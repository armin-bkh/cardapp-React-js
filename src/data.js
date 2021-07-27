import uuid from 'react-uuid';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';


const Data = [
    {
        id: uuid(),
        index: 1,
        src: 'images/img1.jpg',
        detail: "Have a two bedroom",
        location: "location",
        garage: 2,
        market: 0,
        animateStyle : "card slide slideone",
    },
    {
        id: uuid(),
        index: 2,
        src: 'images/img2.jpg',
        detail: "Have not bedroom",
        location: "location",
        garage: 1,
        market: 1,
        animateStyle : "card slide slidetwo",
    },
    {
        id: uuid(),
        index: 3,
        src: 'images/img3.jpg',
        detail: "Have a three bedroom",
        location: "location",
        garage: 1,
        market: 3,
        animateStyle: "card slide slidethree",
    },
    {
        id: uuid(),
        index: 4,
        src: 'images/img4.jpg',
        detail: "Have four bedroom",
        location: "location",
        garage: 0,
        market: 1,
        animateStyle: "card slide slidefour",
    }
];

export default Data;
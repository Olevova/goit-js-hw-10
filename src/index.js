import './css/styles.css';
import contryTemple from './template/contryshablon.hbs';
import hbs from "handlebars";

import fetchCountries from "./fetchCountries";


const eleCreator = ele => document.querySelector(ele);

fetchCountries('uk').then(value => render(value)).catch(error => console.log(error))

eleCreator('#search-box').addEventListener('input', all);

function all(e){
    let nameCountry = e.target.value;
    console.log(nameCountry);
    fetchCountries(nameCountry).then(value => render(value)).catch(error => console.log(error))
}

function render(value) {
    console.log(value);
    const card = contryTemple({value});
    console.log(card);
    eleCreator('.country-info').insertAdjacentHTML("beforeend", card);
}

// const conries = [
//     { name: 'Ukraine', capital: 'Kyiv', population: 44134693 },
//     { name: 'Cook Islands', capital: 'Avarua', population: 18100 }
// ]

// const ttt = JSON.stringify(conries);
// console.log({conries});
// console.log(contryTemple({conries}));

// render(ttt)
const DEBOUNCE_DELAY = 300;

import './css/styles.css';
import contryTemple from './template/contryshablon.hbs';
import contryMany from './template/manycountry.hbs'
import Notiflix from 'notiflix';

import fetchCountries from "./fetchCountries";


const eleCreator = ele => document.querySelector(ele);

// fetchCountries('uk').then(value => render(value)).catch(error => console.log(error))

eleCreator('#search-box').addEventListener('input', all);

function all(e){
    let nameCountry = e.target.value;
    console.log(nameCountry, nameCountry.length);
    if(nameCountry.length > 0)
        fetchCountries(nameCountry).then(value => render(value)).catch(error => console.log(error))
    else {
        eleCreator('.country-info').innerHTML = '';
    }
}

function render(value) {
    console.log(value);
    if (value.length > 2 && 10 > value.length) {
        console.log(1111);
        const card = contryMany({ value });
        return eleCreator('.country-info').innerHTML = card;
    }
    else if (value.length === 1) {
        const card = contryTemple({ value });
        console.log(card);
        return eleCreator('.country-info').innerHTML = card;
    }
    // eleCreator('.country-info').insertAdjacentHTML("beforeend", card)
    else {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        eleCreator('.country-info').innerHTML = '';
    }
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

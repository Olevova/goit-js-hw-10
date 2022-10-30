import './css/styles.css';
import contryTemple from './template/contryshablon.hbs';
import contryMany from './template/manycountry.hbs';
import fetchCountries from "./fetchCountries";

import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { trim } from 'lodash';

const DEBOUNCE_DELAY = 300;

const eleCreator = ele => document.querySelector(ele);

// вішаємо слухача на ввід
eleCreator('#search-box').addEventListener('input', debounce(allResult,DEBOUNCE_DELAY));

// функція яка видає остаточний результат після запиту та рендерінгу
function allResult(e){
    let nameCountry = trim(e.target.value);
    // console.log(nameCountry, nameCountry.length);
    if(nameCountry.length > 0)
        fetchCountries(nameCountry).then(value => render(value)).catch( error => Notiflix.Notify.warning('Oops, there is no country with that name'))
    else {
        eleCreator('.country-info').innerHTML = '';
    }
}
// функція яка рендерить сторінку по отриманим данним
function render(value) {
    // console.log(value);
    if (value.length > 2 && 10 > value.length) {
        const card = contryMany({ value });
        return eleCreator('.country-info').innerHTML = card;
    }
    else if (value.length === 1) {
        const card = contryTemple({ value });
        // console.log(card);
        return eleCreator('.country-info').innerHTML = card;
    }
    else {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        eleCreator('.country-info').innerHTML = '';
    }
}

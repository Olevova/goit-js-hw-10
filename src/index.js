import './css/styles.css';
import contryTemple from './template/contryshablon.hbs';
import hbs from "handlebars";

import fetchCountries from "./fetchCountries";
// console.log(contryTemple);
// console.log(fetchCountries);
// fetchCountries('k').then(d => console.log(d.map((i)=>console.log(i))));
fetchCountries('us').then(conries => render(conries)).catch(er => console.log(er))
const el = ele => document.querySelector(ele);

function render(conries) {
    console.log(conries);
    const card = contryTemple({conries});
    console.log(card);
    el('.country-info').insertAdjacentHTML("beforeend", card);
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

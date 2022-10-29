export default function fetchCountries(n) {
    return fetch(`https://restcountries.com/v2/name/${n}?fields=name,capital,population,flags,languages`).then(r => r.json());
}
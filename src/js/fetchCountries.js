import refs from './refs.js';

export default function fetchCountries(searchQuery) {
  let inputText = refs.input.value;
  return fetch(`https://restcountries.eu/rest/v2/name/${inputText}`).then(res =>
    res.json(),
  );
}

import './styles.css';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import createMarkup from './js/createMarkup.js';
import debounce from 'lodash.debounce';

refs.input.addEventListener('input', debounce(findCountry, 500));

function findCountry() {
  fetchCountries(this.inputText)
    .then(countries => createMarkup(countries))
    .catch(clearMarkup);
}

function clearMarkup() {
  refs.container.innerHTML = '';
}

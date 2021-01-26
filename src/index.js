import './styles.css';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import createMarkup from './js/createMarkup.js';
import debounce from 'lodash.debounce';

refs.input.addEventListener('input', debounce(findCountry, 500));

function findCountry() {
  if (refs.input.value === '') {
    refs.container.innerHTML = '';
    return;
  }
  fetchCountries(this.inputText).then(countries => createMarkup(countries));
}

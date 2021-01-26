import refs from './refs.js';
import { postError } from './pnotify';
import markupList from '../templates/countries-list.hbs';
import markupCountry from '../templates/country-markup.hbs';

export default function createMarkup(countries) {
  if (countries.length > 1) {
    refs.container.innerHTML = '';
    refs.container.insertAdjacentHTML('beforeend', markupList(countries));
  }
  if (countries.length === 1) {
    refs.container.innerHTML = '';
    refs.container.insertAdjacentHTML('beforeend', markupCountry(...countries));
  }

  if (countries.length > 10) {
    refs.container.innerHTML = '';
    postError('Too many matches found. Please enter a more specific query!');
  }

  if (!countries.length) {
    postError('No matches found, try another country.');
  }
}

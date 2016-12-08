import 'whatwg-fetch';
import NetflixView from './views/netflix-result';

const apiUrl = 'http://netflixroulette.net/api/api.php';

const view = new NetflixView(document.querySelector('.movie-box__results'));

const searchBar = document.querySelector('.search-bar');
const input = document.querySelector('.search-bar__input');

function search(term) {
  fetch(`${apiUrl}?title=${term}`)
    .then((r) => r.json())
    .then((data) => {
      view.model = data;
      view.render();
    });
}

search('Scrubs');

searchBar.addEventListener('submit', (ev) => {
  ev.preventDefault();
  search(input.value);
});

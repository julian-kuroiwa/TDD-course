import renderAlbums from './albumList';
import spotify from './spotify';

const albumsList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', event => {
    event.preventDefault();

    spotify.search.albums(searchInput.value).then(response => renderAlbums(response.data.albums.items, albumsList));
  });
}
import spotify from './spotify';
import renderAlbums from './albumList';

const albums = spotify.search.albums('Foo Fighters');

albums.then(response => {
  const albumsList = document.getElementById('album-list');

  renderAlbums(response.data.albums.items, albumsList);
});

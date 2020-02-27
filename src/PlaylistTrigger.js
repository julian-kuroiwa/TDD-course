
const albumTracks = document.getElementById('album-tracks');
let audioObj = null;

export default function playlistTrigger() {
  albumTracks.addEventListener('click', (event) => {
    const target = event.target.parentNode;

    if(target.classList.contains('active')) {
      audioObj.pause();

      return;
    }

    if(audioObj) {
      audioObj.pause();
    }

    audioObj = new Audio(target.getAttribute('data-track-preview'));
    audioObj.play();
    target.classList.add('active');

    audioObj.addEventListener('pause', () => {
      target.classList.remove('active');
    });
  });
}

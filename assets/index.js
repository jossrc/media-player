import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const buttonPlay = document.getElementById('play');

const player = new MediaPlayer({
    element: video,
    plugins: [
        new AutoPlay()
    ]
});

buttonPlay.onclick = () => player.toggle(buttonPlay);
video.onclick = () => player.toggle(buttonPlay);
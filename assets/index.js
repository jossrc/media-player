import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const buttonPlay = document.getElementById('play');
const buttonMute = document.getElementById('mute');

const player = new MediaPlayer({
    element: video,
    plugins: [
        new AutoPlay()
    ]
});

buttonPlay.onclick = () => player.togglePlay(buttonPlay);
video.onclick = () => player.togglePlay(buttonPlay);
buttonMute.onclick = () => player.toggleMute(buttonMute);
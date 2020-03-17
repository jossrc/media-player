const video = document.querySelector('video');
const button = document.querySelector('button');

function MediaPlayer(config) {
    this.media = config.element;
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.toggle = function(button) {
    if (this.media.paused) {
        this.play();
        button.textContent = `Pause`
    } else {
        this.pause();
        button.textContent = `Play`
    }
}

const player = new MediaPlayer({
    element: video
});

button.onclick = () => player.toggle(button);
video.onclick = () => player.toggle(button);
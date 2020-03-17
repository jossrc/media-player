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

export default MediaPlayer;
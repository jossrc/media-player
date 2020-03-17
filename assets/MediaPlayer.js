function MediaPlayer(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this); // player
    })
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

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

export default MediaPlayer;
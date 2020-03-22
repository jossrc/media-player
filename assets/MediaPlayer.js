function MediaPlayer(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        }
    }

    player.muted()

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

MediaPlayer.prototype.togglePlay = function(button) {
    if (this.media.paused) {
        this.play();
        button.textContent = `Pause`;
    } else {
        this.pause();
        button.textContent = `Play`;
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function(button) {
    if (this.media.muted) {
        this.unmute();
        button.textContent = `Mute`;
    } else {
        this.mute();
        button.textContent = `Unmute`;
    }
}

export default MediaPlayer;
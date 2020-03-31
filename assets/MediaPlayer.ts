class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }

    private initPlugins() {     
        this.plugins.forEach(plugin => {
            plugin.run(this); // player
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay(button : HTMLElement) {
        if (this.media.paused) {
            this.play();
            button.textContent = `Pause`;
        } else {
            this.pause();
            button.textContent = `Play`;
        }
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    toggleMute(button : HTMLElement) {
        if (this.media.muted) {
            this.unmute();
            button.textContent = `Mute`;
        } else {
            this.mute();
            button.textContent = `Unmute`;
        }
    }
}


export default MediaPlayer;
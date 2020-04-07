class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
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
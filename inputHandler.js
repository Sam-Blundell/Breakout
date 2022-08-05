export default class inputHandler {
    constructor(game) {
        this.game = game;
        this.keys = {
            ArrowRight: false,
            ArrowLeft: false,
        };
        this.validKeys = Object.keys(this.keys)
        window.addEventListener('keydown', event => {
            if (event.repeat === true) {
                return;
            }
            if (this.validKeys.includes(event.code)) {
                this.keys[event.code] = true;
            }
            if (event.code === 'Space' && this.game.gameOver === false && this.game.intro === false) {
                if (this.game.paused) {
                    this.game.wasPaused = true;
                }
                this.game.paused = !this.game.paused;
            }
            if (event.code === 'KeyS' && this.game.intro === true) {
                this.game.intro = false;
            }
            if (event.code === 'KeyR' && this.game.gameOver === true) {
                this.game.restart();
            }
        })
        window.addEventListener('keyup', event => {
            if (this.validKeys.includes(event.code)) {
                this.keys[event.code] = false;
            }
        })
    }
}
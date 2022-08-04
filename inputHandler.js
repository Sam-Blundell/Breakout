export default class inputHandler {
    constructor(game) {
        this.game = game;
        this.validKeys = ['ArrowRight', 'ArrowLeft', 'Space'];
        this.currentInput = [];
        window.addEventListener('keydown', key => {
            if (this.validKeys.includes(key.code) && this.currentInput.includes(key.code) === false) {
                this.currentInput.push(key.code);
            }
        })
        window.addEventListener('keyup', key => {
            if (this.validKeys.includes(key.code)) {
                this.currentInput = this.currentInput.filter(key => key === key.code);
            }
        })
    }
}
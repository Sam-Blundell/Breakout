export default class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
        this.fontColor = 'white';
    }
    draw(context) {
        context.font = `${this.fontSize}px ${this.fontFamily}`;
        context.textAlign = 'left';
        context.fillStyle = this.fontColor;
        // score
        context.fillText(`Score: ${this.game.score}`, 20, 40);
        // timer
        context.fillText(`Time: ${Math.round(this.game.time / 1000)}`, 20, 70);
        context.fillText(`Lives: ${this.game.lives}`, 480, 40);
        if (this.game.paused === true) {
            context.textAlign = 'center';
            context.font = `${this.fontSize * 2}px ${this.fontFamily}`;
            context.fillText('Paused', this.game.width / 2, this.game.height / 2);
        }
        if (this.game.gameOver === true) {
            context.textAlign = 'center';
            context.font = `${this.fontSize * 2}px ${this.fontFamily}`;
            context.fillText('Game Over', this.game.width / 2, this.game.height / 2);
            context.font = `${this.fontSize}px ${this.fontFamily}`;
            context.fillText(`Final Score: ${this.game.score}`, this.game.width / 2, this.game.height / 2 + 40);
        }
    }
}
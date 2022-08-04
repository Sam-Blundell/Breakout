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
    }
}
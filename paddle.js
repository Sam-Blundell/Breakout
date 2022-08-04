export default class Paddle {
    constructor(game) {
        this.game = game;
        this.width = 50;
        this.height = 6;
        this.xPos = (this.game.width / 2) - (this.width / 2);
        this.yPos = this.game.height - 50;
        this.speed = 2;
    }
    update() {

    }
    draw(context) {
        context.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}
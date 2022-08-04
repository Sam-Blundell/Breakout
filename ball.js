export default class Ball {
    constructor(game) {
        this.game = game;
        this.xPos = this.game.width / 2;
        this.yPos = this.game.height / 2;
        this.size = 2;
        this.hSpeed = 1;
        this.vSpeed = 1;
    }
    update() {

    }
    draw(context) {
        context.drawRect(this.xPos, this.yPos, this.size, this.size);
    }
}
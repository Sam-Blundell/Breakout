export default class Paddle {
    constructor(game) {
        this.game = game;
        this.width = 50;
        this.height = 6;
        this.xPos = (this.game.width / 2) - (this.width / 2);
        this.yPos = this.game.height - 50;
        this.speed = 5;
    }
    update() {
        const { keys } = this.game.input;
        if (keys.ArrowRight === true && (this.xPos < (this.game.width - this.width))) {
            this.xPos += this.speed;
        }
        if (keys.ArrowLeft === true && (this.xPos > 0)) {
            this.xPos -= this.speed;
        }
    }
    draw(context) {
        context.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}
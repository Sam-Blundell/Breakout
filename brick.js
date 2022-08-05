export default class Brick {
    constructor(game, x, y) {
        this.game = game;
        this.xPos = x;
        this.yPos = y;
        this.width = 40;
        this.height = 10;
        this.broken = false;
        this.hitNoise = document.getElementById('pong');
    }
    update() {
        if (this.broken === false) {
            this.collision();
        }
    }
    draw(context) {
        if (this.broken === false) {
            context.fillRect(this.xPos, this.yPos, this.width, this.height);
        }
    }
    collision() {
        const ballLeftEdge = this.game.ball.xPos;
        const ballRightEdge = this.game.ball.xPos + this.game.ball.size;
        const ballTop = this.game.ball.yPos;
        const ballBottom = this.game.ball.yPos + this.game.ball.size;
        if (
            this.xPos <= ballRightEdge &&
            (this.xPos + this.width) >= ballLeftEdge &&
            this.yPos <= ballBottom &&
            this.yPos + this.height >= ballTop
        ) {
            this.broken = true;
            if (this.game.mute === false) {
                this.hitNoise.play();
            }
            this.game.score++;
                this.game.ball.vSpeed *= -1.01;
        }
    }
}
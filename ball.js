export default class Ball {
    constructor(game) {
        this.game = game;
        this.size = 7;
        this.xPos = (this.game.width / 2) - (this.size / 2);
        this.yPos = this.game.height / 2;
        this.hSpeed = 1;
        this.vSpeed = 2;
        this.paddleHeight = this.game.paddle.yPos;
        this.paddleWidth = this.game.paddle.width;
    }
    update() {
        this.yPos += this.vSpeed;
        this.xPos += this.hSpeed;
        if (this.yPos <= 0) {
            this.vSpeed = -this.vSpeed;
            this.paddleChecked = false;
        }
        if (this.xPos >= this.game.width - this.size || this.xPos <= 0) {
            this.hSpeed = -this.hSpeed;
        }
        if ((this.yPos + this.size > this.paddleHeight) && (this.yPos < this.paddleHeight + 7)) {
            this.paddleCheck();
        }
        if ((this.yPos + this.size) >= this.game.height) {
            this.miss();
        }

    }
    draw(context) {
        context.fillRect(this.xPos, this.yPos, this.size, this.size);
    }
    miss() {
        this.game.lives--;
        this.vSpeed = 2;
        this.hSpeed = 1;
        this.xPos = (this.game.width / 2) - (this.size / 2);
        this.yPos = this.game.height / 2;
    }
    paddleCheck() {
        const paddleLeftEdge = this.game.paddle.xPos;
        const paddleRightEdge = this.game.paddle.xPos + this.paddleWidth;
        const ballLeftEdge = this.xPos;
        const ballRightEdge = this.xPos + this.size;
        
        if (ballRightEdge >= paddleLeftEdge && ballLeftEdge <= paddleRightEdge) {
            this.game.score++;
            this.yPos = this.paddleHeight - this.size;
            this.vSpeed = -this.vSpeed * 1.1;
        }
    }
}

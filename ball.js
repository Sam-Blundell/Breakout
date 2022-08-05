export default class Ball {
    constructor(game) {
        this.game = game;
        this.size = 7;
        this.xPos = (this.game.width / 2) - (this.size / 2);
        this.yPos = this.game.height / 2;
        this.hSpeed = 1;
        this.vSpeed = 3;
        this.vSpeedMin = 3;
        this.hSpeedMax = 6;
        this.vSpeedMax = 12;
        this.paddleHeight = this.game.paddle.yPos;
        this.paddleWidth = this.game.paddle.width;
        this.missSound = document.getElementById('fail');
        this.hitSound = document.getElementById('pong');
    }
    update() {
        this.yPos += this.vSpeed;
        this.xPos += this.hSpeed;
        if (this.vSpeed > this.vSpeedMax) {
            this.vSpeed = this.vSpeedMax;
        }
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
        if (this.game.mute === false) {
            this.missSound.play();
        }
        this.game.lives--;
        if (this.game.lives > 0) {
            this.vSpeed = this.vSpeedMin;
            this.hSpeed = 1;
            this.xPos = (this.game.width / 2) - (this.size / 2);
            this.yPos = this.game.height / 2;
        }
    }
    paddleCheck() {
        const paddleLeftEdge = this.game.paddle.xPos;
        const paddleRightEdge = this.game.paddle.xPos + this.paddleWidth;
        const ballLeftEdge = this.xPos;
        const ballRightEdge = this.xPos + this.size;
        
        if (ballRightEdge >= paddleLeftEdge && ballLeftEdge <= paddleRightEdge) {
            const offSet = ((ballLeftEdge + 3.5) - (paddleLeftEdge + 30)) / 15;
            this.game.score++;
            this.yPos = this.paddleHeight - this.size;
            if (this.game.mute === false) {
                this.hitSound.play();
            }
            this.vSpeed = -this.vSpeed * 1.1;
            this.hSpeed = Math.min(Math.max(this.hSpeed + offSet, -this.hSpeedMax), this.hSpeedMax );
        }
    }
}

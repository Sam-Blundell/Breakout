import UI from './userInterface.js';
import InputHandler from './inputHandler.js';
import Paddle from './paddle.js';
import Ball from './ball.js';

window.addEventListener('load', () => {
    const screen = document.getElementById('screen1');
    const context = screen.getContext('2d');
    screen.width = 600;
    screen.height = 800;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.score = 0;
            this.lives = 3;
            this.time = 0;
            this.gameOver = false;
            this.UI = new UI(this);
            this.input = new InputHandler(this);
            this.paddle = new Paddle(this);
            this.ball = new Ball(this);
        }
        update(timeDelta) {
            this.time += timeDelta;
            this.paddle.update();
            this.ball.update();
        }
        draw(context) {
            this.UI.draw(context);
            this.paddle.draw(context);
            this.ball.draw(context);
        }
    }

    const game = new Game(screen.width, screen.height);

    let lastTimeStamp = 0;
    function animate(timeStamp) {
        const timeDelta = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        context.fillStyle = 'black';
        context.fillRect(0, 0, game.width, game.height);
        game.update(timeDelta);
        game.draw(context);
        requestAnimationFrame(animate);
    }
    animate(0);
})
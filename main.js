import UI from './userInterface.js';
import InputHandler from './inputHandler.js';
import Paddle from './paddle.js';
import Ball from './ball.js';
import Brick from './brick.js';

// TODO: 
// Brickgrid class
// Fix side collisions
// fix stuck edge bug

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
            this.intro = true;
            this.gameOver = false;
            this.paused = false;
            this.wasPaused = true;
            this.mute = false;
            this.UI = new UI(this);
            this.input = new InputHandler(this);
            this.paddle = new Paddle(this);
            this.ball = new Ball(this);
            this.bricks = [];
            this.buildGrid();
        }
        update(timeDelta) {
            if ((this.bricks.filter(brick => brick.broken === false)).length === 0) {
                console.log('test')
                this.score += 100;
                this.bricks.forEach(brick => brick.broken = false);
                this.ball.vSpeedMin = 5;
                this.paddle.xPos = (this.width / 2) - (this.paddle.width / 2);
            }
            if (this.wasPaused) {
                this.wasPaused = false;
            } else {
                this.time += timeDelta;
            }
            this.paddle.update();
            this.ball.update();
            this.bricks.forEach(brick => {
                brick.update();
            })
            if (this.lives === 0) {
                this.gameOver = true;
            }
        }
        draw(context) {
            this.UI.draw(context);
            this.paddle.draw(context);
            this.ball.draw(context);
            this.bricks.forEach(brick => {
                brick.draw(context);
            })
        }
        buildGrid() {
            const brickRows = 6;
            const brickColumns = 10;
            const brickSpacing = 8;
            const brickXStart = 20;
            const brickYStart = 100;
            const brickWidth = 40;
            const brickHeight = 10

            for (let i = 1; i <= brickRows; i++) {
                for (let j = 1; j <= brickColumns; j++) {
                    this.bricks.push(new Brick(this, brickXStart + (j*brickWidth) + (j*brickSpacing), brickYStart + (i*brickHeight) + (i*brickSpacing)))
                }
            }
        }
        restart() {
            this.score = 0;
            this.lives = 4;
            this.time = 0;
            this.ball.vSpeedMin = 3;
            this.paddle.xPos = (this.width / 2) - (this.paddle.width / 2);
            this.bricks.forEach(brick => {
                brick.broken = false;
            })
            this.gameOver = false;
        }
    }

    const game = new Game(screen.width, screen.height);

    let lastTimeStamp = 0;
    const animate = (timeStamp) => {
        context.fillStyle = 'black';
        context.fillRect(0, 0, game.width, game.height);
        if (game.paused === false && game.intro === false) {
            const timeDelta = timeStamp - lastTimeStamp;
            lastTimeStamp = timeStamp;
            if (game.gameOver === false) {
                game.update(timeDelta);
            }
        }
        game.draw(context);
        requestAnimationFrame(animate);
    }
    animate(0);
})
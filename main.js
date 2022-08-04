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
        }
        update(timeDelta) {
            this.time += timeDelta;
        }
        draw() {

        }
    }

    const game = new Game(screen.width, screen.height);

    let lastTimeStamp = 0;
    function animate(timeStamp) {
        const timeDelta = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        context.fillStyle = 'black';
        game.update(timeDelta);
        game.draw(context);
        context.fillRect(0, 0, game.width, game.height);
        requestAnimationFrame(animate);
    }
    animate(0);
})
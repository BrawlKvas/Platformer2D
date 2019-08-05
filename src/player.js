function createTexture(w, h) {
    let canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext('2d');
    let setColor = (color) => {ctx.fillStyle = color}

    setColor('#f3a683'); // Лицо
    ctx.fillRect(0, 0, w, h * 0.55);

    setColor('#f5cd79'); // Волосы
    ctx.fillRect(0, 0, w, h * 0.15);
    ctx.fillRect(0, 0, w * 0.1, h * 0.25);
    ctx.fillRect(w, 0, -w * 0.1, h * 0.25);

    // setColor('#63cdda'); // Глаза
    // ctx.fillRect(w * 0.25, h * 0.25, w * 0.12, h * 0.17);
    // ctx.fillRect(w * 0.75, h * 0.25, -w * 0.12, h * 0.17);

    setColor('#546de5'); // Штаны
    ctx.fillRect(0, h * 0.54, w, h * 0.2);
    ctx.fillRect(0, h * 0.68, w * 0.42, h * 0.32);    
    ctx.fillRect(w, h * 0.68, -w * 0.42, h * 0.32);   

    setColor('#574b90'); // Обувь
    ctx.fillRect(0, h, w * 0.42, -h * 0.1);   
    ctx.fillRect(w, h, -w * 0.42, -h * 0.1);   
    
    setColor('#f3a683'); // Руки
    ctx.fillRect(0, h * 0.54, w * 0.22, h * 0.28);
    ctx.fillRect(w, h * 0.54, -w * 0.22, h * 0.28);

    setColor('#596275'); // Плечи
    ctx.fillRect(0, h * 0.54, w * 0.22, h * 0.1);
    ctx.fillRect(w, h * 0.54, -w * 0.22, h * 0.1);

    return canvas;
}


class Player {
    constructor({x, y, height, width}) {
        this.w = width;
        this.h = height;

        this.texture = createTexture(this.w, this.h);

        this.x = x;
        this.y = y;

        this.dx = 0;
        this.dy = 0;

        this.speedRun = 3.5;
        this.pulseJump = 6;

        this.isPhysics = true;
        this.isColliding = true;

        this.viewPort = true;

        this.game;
    }

    birth() {
        document.addEventListener('keydown', this.keyEvents.bind(this));
        document.addEventListener('keyup', this.keyEvents.bind(this));
    }

    keyEvents(e) {
        let code = e.keyCode;

        if (e.type == 'keydown') {
            if (code == 87) {
                this.jump();
            } else if (code == 68) {
                this.run(1, 0);
            } else if (code == 65) {
                this.run(1, 1);
            }
        } else if (e.type == 'keyup') {
            if (code == 68) {
                this.run(0, 0);
            } else if (code == 65) {
                this.run(0, 1);
            }
        }

        
    }

    run(stats, side) {
        if (stats == 1) {
            if (side == 0) {
                this.dx = this.speedRun;
            } else {
                this.dx = -this.speedRun;
            }
        } else {
            this.dx = 0;
        }
        
    }

    jump() {
        if (this.dy == 0) this.dy = -this.pulseJump;
    }

    collidingX() {
        this.dx = 0;
    }

    collidingY() {
        this.dy = 0;
    }

    position() {
        this.x += this.dx;
        this.y += this.dy;
    }

    drawHuman() {
        this.game.ctx.drawImage(this.texture, this.x + this.game.camera.x, this.y + this.game.camera.y);
    }

    step() {
        this.position();
        this.drawHuman();
    }
}

export default Player;

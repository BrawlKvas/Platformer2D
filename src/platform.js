export class Platform {
    constructor({x, y, width, height, color, colliding}) {
        this.w = width;
        this.h = height;
        this.color = color;

        this.x = x;
        this.y = y;

        this.isPhysics = false;
        this.isColliding = colliding;

        this.viewPort = false;

        this.game;
    }

    drawPlatform() {  
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fillRect(this.x + this.game.camera.x, this.y + this.game.camera.y, this.w, this.h);
    }

    birth() {
        
    }

    step() {
        this.drawPlatform();
    }
}

export class ActivePlatform extends Platform{
    constructor({x, y, width, height, color, colliding, dx, dy, lx, ly}) {
        super({x, y, width, height, color, colliding});

        this.dx = dx;
        this.dy = dy;

        this.goX = 0;
        this.goY = 0;

        this.lx = lx;
        this.ly = ly;
    }

    movePlatform() {
        if (this.goX > this.lx) {
            this.dx *= -1;
            this.goX = 0;
        }
        if (this.goY > this.ly) {
            this.dy *= -1;
            this.goY = 0;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.goX += Math.abs(this.dx);
        this.goY +=  Math.abs(this.dy);
    }

    step() {
        this.movePlatform();
        super.step();
    }
}

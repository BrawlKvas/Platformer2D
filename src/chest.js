function makeChest(w, h) {
    let canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext('2d');
    let setColor = (color) => {ctx.fillStyle = color}

    setColor('#1e272e');
    ctx.fillRect(0, 0, w, h);
    setColor('#ffaf40');
    ctx.fillRect(w * 0.15, h * 0.15, w * 0.70, h * 0.70);
    setColor('#1e272e');
    ctx.fillRect(0, h*0.4, w, h*0.15);
    setColor('#F8EFBA');
    ctx.fillRect(w*0.43, h*0.35, w*0.15, h*0.22);

    return canvas;
}


class Chest {
    constructor ({x, y, width, height, colliding}) {
        this.w = width;
        this.h = height;

        this.x = x;
        this.y = y;

        this.texture = makeChest(this.w, this.h);

        this.isPhysics = false;
        this.isColliding = colliding;

        this.viewPort = false;

        this.game;
    }
    drawPlatform() {  
        this.game.ctx.drawImage(this.texture, this.x + this.game.camera.x, this.y + this.game.camera.y);
    }

    birth() {
        
    }

    step() {
        this.drawPlatform();
    }
}

export default Chest;
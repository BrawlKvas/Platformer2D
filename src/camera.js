class Camera {
    constructor(game, obj) {
        this.game = game;
        this.elem = obj;
        this.x;
        this.y;
    }

    step() {
        this.x = this.game.windowW / 2 - this.elem.x;
        this.y = this.game.windowH / 2 - this.elem.y;
    }
}

export default Camera;
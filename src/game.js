import player from './player'; 
let Player = player;
import camera from './camera'; 
let Camera = camera;
import * as platform from './platform'; 
let Platform = platform.Platform;
let ActivePlatform = platform.ActivePlatform;
import chest from './chest';
let Chest = chest;


class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d', {alpha: false});

        this.canvasBg = "#303952";

        this.windowH = this.canvas.height = window.innerHeight; 
        this.windowW = this.canvas.width = window.innerWidth;

        this.g = 0.16;

        this.objectWorld = [];
        this.objectCollision = [];
        this.objId = {};

        this.camera;

        this.mainLoop = true;

    }

    addObject(objectName, id, param) {
       let obj = eval(`new ${objectName}(param)`);

       if (id != '') this.objId[id] = obj;

       obj.game = this;

       this.objectWorld.push(obj);

       if (obj.isColliding) this.objectCollision.push(obj);
       if (obj.viewPort) this.camera = new Camera(this, obj);

       obj.birth();
    }

    collisionY(obj1, obj2) {
        if (obj1.y + obj1.h + obj1.dy > obj2.y && obj1.y + obj1.dy < obj2.y + obj2.h && obj1.x + obj1.w > obj2.x && obj1.x < obj2.x + obj2.w) {
            return true;
        }
        return false;
    }
    collisionX(obj1, obj2) {
        if (obj1.y + obj1.h > obj2.y && obj1.y < obj2.y + obj2.h && obj1.x + obj1.w + obj1.dx > obj2.x && obj1.x + obj1.dx < obj2.x + obj2.w) {
            return true;
        }
        return false; 
    }

    colliding() {
        for (let i = 0; i < this.objectCollision.length; i++) {
            for (let j = 0; j < this.objectCollision.length; j++) {
                if (i != j && ('collidingY' in this.objectCollision[i])) {
                    if (this.collisionY(this.objectCollision[i], this.objectCollision[j])) this.objectCollision[i].collidingY();
                }
                if (i != j && ('collidingX' in this.objectCollision[i])) {
                    if (this.collisionX(this.objectCollision[i], this.objectCollision[j])) this.objectCollision[i].collidingX();
                }   
            }
        }
    }

    impactWorld() {
        this.objectWorld.forEach(elem => {
            if (elem.isPhysics) {
                elem.dy += this.g;
            }
        });

        this.colliding();
    }

    main() {
        if (this.collisionY(this.objId['player'], this.objId['disappearPl1'])) {
            this.objId['disappearPl1'].w = 0;
            document.getElementById('rules').classList.add('hidden');
        }

        if (this.collisionX(this.objId['player'], this.objId['deadPl1'])) {
            this.loss();
        } 
        if (this.collisionX(this.objId['player'], this.objId['deadPl2'])) {
            this.loss();
        }
        if (this.collisionX(this.objId['player'], this.objId['deadPl3'])) {
            this.loss();
        }
        if (this.objId['player'].y > 7000) {
            this.loss();
        }

        if (this.collisionX(this.objId['player'], this.objId['gold'])) {
            this.winner();
        }
    }

    loss() {
        this.mainLoop = false;
        window.location.reload();
    }

    winner() {
        this.mainLoop = false;
        document.getElementById('gameOver').classList.remove('d-none');
    }

    resetScreen() {
        this.ctx.fillStyle = this.canvasBg;
        this.ctx.fillRect(0, 0, this.windowW, this.windowH);
    }

    render() {
        this.resetScreen();

        this.impactWorld();

        this.camera.step();

        this.objectWorld.forEach(elem => {
            elem.step();
        });
        this.main();
        if (this.mainLoop) {
            requestAnimationFrame(this.render.bind(this));
        }
    }

    start() {
        requestAnimationFrame(this.render.bind(this));
    }
}

export default Game;

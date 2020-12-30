import tilesheet from './assets/adventurer_tilesheet.png'

class Player {
    constructor({ x, y, height, width }) {
        this.w = width
        this.h = height

        this.x = x
        this.y = y

        this.dx = 0
        this.dy = 0

        this.tilesheet = new Image()
        this.tilesheet.src = tilesheet

        this.view = document.createElement('canvas')
        this.view.width = this.w
        this.view.height = this.h
        this.viewCtx = this.view.getContext('2d')

        this.controller = { // Pressing a key
            up: false,
            down: false,
            left: false,
            right: false
        }

        this.movement = {
            state: 0, // 0 - rest, 1 - run, 2 - jump,
            direction: 0 // 0 - left, 1 - right
        }

        this.speedRun = 3.5
        this.pulseJump = 6

        this.isPhysics = true
        this.isColliding = true

        this.viewPort = true

        this.game
    }

    birth() {
        document.addEventListener('keydown', this.keyEvents.bind(this))
        document.addEventListener('keyup', this.keyEvents.bind(this))
    }

    keyEvents(e) {
        if (e.repeat)
            return

        if (e.type === 'keydown') {
            switch (e.code) {
                case 'KeyW':
                    this.controller.up = true
                    break
                case 'KeyA':
                    this.controller.left = true
                    this.movement.direction = 0
                    break
                case 'KeyD':
                    this.controller.right = true
                    this.movement.direction = 1
                    break
                default:
                    return
            }
        } else if (e.type === 'keyup') {
            switch (e.code) {
                case 'KeyW':
                    this.controller.up = false
                    break
                case 'KeyA':
                    this.controller.left = false
                    break
                case 'KeyD':
                    this.controller.right = false
                    break
                default:
                    return
            }
        }
    }

    calcDirectionSpeed() {
        this.dx = this.controller.left && this.controller.right ? 0 :
            this.controller.left ? -this.speedRun :
                this.controller.right ? this.speedRun : 0

        if (this.controller.up) {
            this.jump()
        }
    }

    jump() {
        if (this.dy == 0) this.dy = -this.pulseJump
    }

    collidingX() {
        this.dx = 0
    }

    collidingY() {
        this.dy = 0
    }

    position() {
        this.x += this.dx
        this.y += this.dy

        this.calcDirectionSpeed()

        if (this.dy !== 0)
            this.movement.state = 2
        else if (this.controller.left || this.controller.right)
            this.movement.state = 1
        else
            this.movement.state = 0
    }

    defview() {
        this.viewCtx.clearRect(0, 0, this.w, this.h)
        this.viewCtx.save()

        if (!this.movement.direction) {
            this.viewCtx.translate(this.w / 2, this.h / 2)
            this.viewCtx.scale(-1, 1)
        }

        let xCut, yCut

        switch (this.movement.state) {
            case 0:
                xCut = 0
                yCut = 0
                break
            case 1:
                xCut = 0
                yCut = 110
                break
            case 2:
                xCut = 80
                yCut = 0
                break
            default:
                console.error('Unknown status value')
        }
        
        this.viewCtx.drawImage(
            this.tilesheet, 
            xCut, yCut, 
            80, 102, 
            !this.movement.direction ? -this.w / 2 : 0, !this.movement.direction ? -this.h / 2 : 0, 
            this.w, this.h
        )

        this.viewCtx.restore()
    }

    drawHuman() {
        this.defview()

        this.game.ctx.drawImage(
            this.view,
            this.x + this.game.camera.x, this.y + this.game.camera.y,
            this.w, this.h
        )
    }

    step() {
        this.position()
        this.drawHuman()
    }
}

export default Player

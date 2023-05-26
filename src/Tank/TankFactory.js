(() => {

    const { FactoryBullet, RenderableObject } = document.module.exports

    class TankFactory extends RenderableObject {
        #x = 0
        #y = 0
        #speed = 20
        #armor = 10
        #momentum = 200

        constructor(params) {
            
            super({
                ...params,
                className: 'tank',
                id:  params?.id ?? `tank-${Math.random()*100}`
            });

            this.#x = params?.x ?? 0
            this.#y = params?.y ?? 0
        }

        getPosition = () => {
            return {
                x: this.#x,
                y: this.#y
            }
        }

        getArmor = () => {
            return this.#armor
        }

        move = (direction) => {
            switch (direction) {
                case 'RIGHT':
                    this.#x += this.#speed
                    this.rotate(90)
                    return
                case 'LEFT':
                    this.#x -= this.#speed
                    this.rotate(270)
                    return
                case 'UP':
                    this.#y -= this.#speed
                    this.rotate(0)
                    return
                case 'DOWN':
                    this.#y += this.#speed
                    this.rotate(180)
                    return
            }
        }

        fire = (finalPosition) => {
            if (this.#armor <= 0) return

            this.#armor --
            const bullet = new FactoryBullet({x: this.#x, y: this.#y})
            bullet.render();

            const maxDistance = Math.sqrt((finalPosition.y - this.#y)**2 + (finalPosition.x - this.#x)**2)
            const distance = maxDistance < this.#momentum ? maxDistance : this.#momentum

            const angle = Math.atan((finalPosition.y - this.#y) / (finalPosition.x - this.#x))
            const finalBulletXPosition = distance * Math.cos(angle) + this.#x
            const finalBulletYPosition = distance * Math.sin(angle) + this.#y

            bullet.setPosition({x: finalBulletXPosition, y: finalBulletYPosition})
            bullet.render();

            return bullet
        }

    }

    document.module.exports.TankFactory = TankFactory
})()
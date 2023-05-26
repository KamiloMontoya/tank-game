

(() => {
    const { RenderableObject } = document.module.exports

    class FactoryBullet extends RenderableObject {

        #x = 0
        #y = 0

        constructor(params) {
            
            super({
                ...params,
                className: 'bullet',
                id: params?.id ?? `bullet-${Math.random()*100}`
            });

            this.#x = params?.x
            this.#y = params?.y

            if (!(this.#x !== undefined) || !(this.#y !== undefined)) {
                throw Error('Initial position must be set')
            }
        }

        getPosition = () => {
            return {
                x: this.#x,
                y: this.#y
            }
        }

        setPosition = (newPosition) => {
            this.#x = newPosition.x
            this.#y = newPosition.y
        }

    }

    document.module.exports.FactoryBullet = FactoryBullet

})()
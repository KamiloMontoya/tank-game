(() => {

    class RenderableObject {
        #app = document.getElementById('app')
        #htmlElement = document.createElement('div')
        #id = null
        #className = ''

        constructor(params) {
            this.#id = params?.id ?? Math.random()*100
            this.#className = params?.className
        }

        getHtmlElement = () => {
            return this.#htmlElement
        }

        getPosition =  () => {
            return {
                x: 0,
                y: 0
            }
        }

        rotate = (deg) => {
            this.#htmlElement.style.transform = `rotate( ${deg}deg )`
        }

        render = () => {
            const position = this.getPosition()
            this.#htmlElement.id = this.#id
            this.#htmlElement.style.top = `${position.y}px`
            this.#htmlElement.style.left = `${position.x}px`
            this.#htmlElement.style.position = 'absolute'
            this.#htmlElement.className = this.#className
            this.#app.append(this.#htmlElement);
        }
    }

    document.module.exports.RenderableObject = RenderableObject

})()


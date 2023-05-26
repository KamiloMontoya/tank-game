const { TankFactory } = document.module.exports


const app = document.getElementById('app')
const tank = new TankFactory()

tank.render()


// let interval = null
const moveTank = (direction) => {
    tank.move(direction)
    tank.render()
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            moveTank('RIGHT');
            break
        case 'ArrowLeft':
            moveTank('LEFT');
            break
        case 'ArrowUp':
            moveTank('UP');
            break
        case 'ArrowDown':
            moveTank('DOWN');
            break
    }
});

document.addEventListener("click", (event) => {
    tank.fire({
        x: event.clientX,
        y: event.clientY
    });
} );
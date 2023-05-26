// TEST DRIVEN DEVELOPMENT (TDD)

const TankFactory = document.module.exports.TankFactory

describe('Tank', function () {
    describe('init', function () {
        it('should return x=0 and y=0 when tank is created', function () {
            const tank = new TankFactory()
            const position = tank.getPosition()
            expect(position.x).toBe(0)
            expect(position.y).toBe(0)
        })

        it('should have 10 bullent when tank is created', function () {
            const tank = new TankFactory()
            const armor = tank.getArmor()
            expect(armor).toBe(10)
        })

    })

    describe('move', function () {
        it('move to the right', function () {
            const tank = new TankFactory()
            tank.move('RIGHT')
            const position = tank.getPosition()
            expect(position.x).toBe(20)
        })

        it('move to the left', function () {
            const tank = new TankFactory()
            tank.move('LEFT')
            const position = tank.getPosition()
            expect(position.x).toBe(-20)
        })

        it('move to the up', function () {
            const tank = new TankFactory()
            tank.move('UP')
            const position = tank.getPosition()
            expect(position.y).toBe(-20)
        })

        it('move to the down', function () {
            const tank = new TankFactory()
            tank.move('DOWN')
            const position = tank.getPosition()
            expect(position.y).toBe(20)
        })
    })

    // describe('fire', function () {
    //     it('should fire a bullet from 10 and have 9 left', function () {
    //         const tank = new TankFactory()
    //         tank.fire()
    //         expect(tank.getArmor()).toBe(9)
    //     })

    //     it('should fire a bullet to 0,300 but reach only to 0,200', function () {
    //         const tank = new TankFactory()
    //         const bullet = tank.fire({x: 0, y: 300})
    //         const bulletPosition = bullet.getPosition()
    //         expect(bulletPosition.x).toBe(200)
    //         expect(bulletPosition.y).toBe(0)
    //     })
    // })
})
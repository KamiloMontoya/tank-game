// const FactoryBullet = require('./Bullet').FactoryBullet
const FactoryBullet = document.module.exports.FactoryBullet
describe('Bullet', function () {
    describe('init', function () {
        it('should throw if initial positions are not set', function ( ) {
            try {
                new FactoryBullet()
            } catch (e) {
                expect(e.message).toBe('Initial position must be set')
            }
        })
    })

    describe('getPosition', function () {
        it('should return initial position of bullet', function ( ) {
            const bullet =  new FactoryBullet({x: 130, y: 120})
            const position = bullet.getPosition()

            expect(position.x).toBe(130)
            expect(position.y).toBe(120)
        })
    })

    describe('setPosition', function () {
        it('should return initial position of bullet', function ( ) {
            const bullet =  new FactoryBullet({x: 130, y: 120})
            bullet.setPosition({x: 150, y: 200})
            const position = bullet.getPosition()

            expect(position.x).toBe(150)
            expect(position.y).toBe(200)
        })
    })
})
describe('Bullet', function () {
    describe('init', function () {
        it('should throw if initial positions are not set', function ( ) {
            try {
                new FactoryBullet()
            } catch (e) {
                expect(e.message).toBe('Initial position must be set')
            }
        })
    })

    describe('getPosition', function () {
        it('should return initial position of bullet', function ( ) {
            const bullet = new FactoryBullet({x: 130, y: 120})
            const position = bullet.getPosition()

            expect(position.x).toBe(130)
            expect(position.y).toBe(120)
        })
    })

    describe('setPosition', function () {
        it('should return initial position of bullet', function ( ) {
            const bullet = new FactoryBullet({x: 130, y: 120})
            bullet.setPosition({x: 150, y: 200})
            const position = bullet.getPosition()

            expect(position.x).toBe(150)
            expect(position.y).toBe(200)
        })
    })
})
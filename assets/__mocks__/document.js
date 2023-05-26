const {JSDOM} = require("jsdom")
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

const app = global.document.createElement('div')
const body = document.getElementsByTagName('body')[0]
app.id = 'app'
body.append(app)

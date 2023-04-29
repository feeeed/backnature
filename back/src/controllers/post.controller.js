const mainCrud = require('./main.controller')
const {Post} = require('../model/')

module.exports = {
    ...mainCrud(Post),
}

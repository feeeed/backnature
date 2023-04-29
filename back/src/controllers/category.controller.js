const mainCrud = require('./main.controller')
const {Category} = require('../model/')

module.exports = {
    ...mainCrud(Category),
}


const router = require("express-promise-router")()

const {auth} = require("../controllers");

router.route('/login').post(auth.login)


module.exports = router

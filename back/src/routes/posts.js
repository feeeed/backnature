const router = require('express-promise-router')()

const {post} = require('../controllers')

router.route('/:id').get(post.get)
router.route('/').post(post.create)
router.route('/').get(post.getAll)
router.route('/:id').get(post.update)
router.route('/:id').get(post.delete)


module.exports = router
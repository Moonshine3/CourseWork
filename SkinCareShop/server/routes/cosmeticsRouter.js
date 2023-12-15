const Router = require('express')
const router = new Router()
const cosmeticController = require('../controllers/cosmeticsController')

router.post('/', cosmeticController.create)
router.get('/', cosmeticController.getAll)
router.get('/:id', cosmeticController.getOne)

module.exports = router

const Router = require('express')
const router = new Router()
const cosmeticsRouter = require('./cosmeticsRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/cosmetics', cosmeticsRouter)

module.exports = router


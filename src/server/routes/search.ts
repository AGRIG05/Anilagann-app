import * as express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (_req, res) {
    res.render('search', {})
})

export default router

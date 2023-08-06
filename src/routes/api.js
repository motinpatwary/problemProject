const router = require('express').Router()
const ProductController = require('../controller/ProductController')

router.post('/CreateProduct' , ProductController.CreateProduct)
router.get('/ReadProduct', ProductController.ReadProduct)
router.post('/UpdateProduct/:id', ProductController.UpdateProduct)
router.get('/DeleteProduct/:id', ProductController.DeleteProduct)


module.exports = router;
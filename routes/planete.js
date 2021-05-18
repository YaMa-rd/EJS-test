const express = require('express');
const planetesController = require('../controllers/planetes')
const router = express.Router();

router.get('/planetes', planetesController.getPlanetes);

router.get('/planete/:id_planete', planetesController.getPlanete);

router.get('/cart', planetesController.getCart);

router.post('/cart', planetesController.postCart);

router.post('/cart-delete-item', planetesController.postCartDeleteProduct);

module.exports = router;
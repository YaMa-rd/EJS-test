const express = require('express');
const planetesController = require('../controllers/planetes')
const router = express.Router();

router.get('/planetes', planetesController.getPlanetes);

router.get('/planete/:id_planete', planetesController.getPlanete);

module.exports = router;
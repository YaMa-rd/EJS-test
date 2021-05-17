const express = require('express');
const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/add-planete', adminController.getPlanete);
router.post('/add-planete', adminController.postPlanete);
router.get('/planetes', adminController.getPlanetes);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');

router.get('/contact', controller.getAll);
router.get('/contact:id', controller.getOne);
router.post('/contact', controller.create);
router.put('/contact:id', controller.update);
router.delete('/contact:id', controller.deleter);

module.exports = router;
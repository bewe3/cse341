const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.getAll);
router.get('/', controller.getOne);

module.exports = router;

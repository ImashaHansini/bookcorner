const express = require('express');
const { check } = require('express-validator');

const addOrder = require('../Controllers/payment-controllers');

const router = express.Router();

router.post('/', addOrder);

module.exports = router;

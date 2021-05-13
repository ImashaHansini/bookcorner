const express = require('express');
const { check } = require('express-validator');

const paymentControllers = require('../Controllers/payment-controllers');

const router = express.Router();

router.post(
  '/',
  [
    check('fullName')
      .not()
      .isEmpty(),
    check('cardNO').isLength({ min: 16 }),
    check('expDate')
      .not()
      .isEmpty()
  ],
  paymentControllers.createPayment
);

module.exports = router;

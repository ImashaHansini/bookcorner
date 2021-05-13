const { validationResult } = require('express-validator');

const HttpError = require('../Models/http-error');
const Payment = require('../Models/payment');

const DUMMY_USERS = [
  {
    id: 'u1',
    fullName: 'John doe',
    cardNO: '4578631498761234',
    expDate: '2022-08'
  }
];

const Purchase = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { fullName, cardNO, expDate } = req.body;

 const createdPayment = new Payment({
    fullName,
    cardNO,
    expDate
  });

  try {
    await createdPayment.save();
  } catch (err) {
    const error = new HttpError(
      'Purchase failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({payment: createdPayment.toObject({ getters: true })});
};

exports.Purchase = Purchase;

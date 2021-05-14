const { validationResult } = require('express-validator');

const HttpError = require('../Models/http-error');
const { create } = require('../Models/payment');
const Payment = require('../Models/payment');

// const DUMMY_PAYMENTS = [
//   {
//     id: 'u1',
//     fullName: 'John doe',
//     cardNO: '4578631498761234',
//     expDate: '2022-08-31'
//   }
// ];

const addOrder = async (req, res) => {
  const fullName = req.body.fullName
  const cardNo = req.body.cardNo
  const expDate = req.body.expDate
  const orderItems = req.body.orderItems

  const order = new Payment({
    fullName,
    cardNo,
    expDate,
    orderItems
  })

  try {
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  } catch (error) {
    res.status(400).json({message: `${error.message}`})
  }
  
}

module.exports = addOrder

// const Purchase = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(
//       new HttpError('Invalid inputs passed, please check your data.', 422) //Unsupported type of objects
//     );
//   }

// const { fullName, cardNO, expDate } = req.body;

//  const createPayment = new Payment({
//     fullName,
//     cardNO,
//     expDate
//   });

//   const addOrderItem = async (req, res) => {
//     try {
//       await createPayment.save();
//     } catch (err) {
//       const error = new HttpError(
//         'Purchase failed, please try again.',
//         500 
//       ); //Internal server error
//       return next(error);
//     }
  
//     res.status(201).json({payment: createPayment.toObject({ getters: true })});
//   }

// }; //request created

// exports.Purchase = Purchase;

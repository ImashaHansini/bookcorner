const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database.js");

const paymentRoutes = require("./routes/payments-routes");
const HttpError = require("./Models/http-error");

connectDB();

const app = express();

app.use(express.json());

app.use("/payment", paymentRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000, console.log("Server running on port 5000"));

// mongoose
//   .connect(
// 'mongodb+srv://Imasha:bookcorner@123@cluster0.qz07u.mongodb.net/book-corner?retryWrites=true&w=majority')
//   .then(() => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });

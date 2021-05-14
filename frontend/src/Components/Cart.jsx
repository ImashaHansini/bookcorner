import React, { useEffect, useState } from "react";
import Converter from "./converter/converter";
import { useHistory } from "react-router-dom";
import { removeFromCart, addToWishlist } from "../actions/cartAction";
import CartItem from "./CartItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const notifyAlert = (message, type, callback) => {
  switch (type) {
    case "SUCCESS":
      toast.success(`${message}`, {
        onClose: () => {
          if (callback) {
            callback();
          }
        },
      });
      break;

    case "ERROR":
      toast.error(`${message}`, {
        onClose: () => {
          if (callback) {
            callback();
          }
        },
      });
      break;

    case "INFO":
      toast.info(`${message}`, {
        onClose: () => {
          if (callback) {
            callback();
          }
        },
      });
      break;

    case "WARN":
      toast.warning(`${message}`, {
        onClose: () => {
          if (callback) {
            callback();
          }
        },
      });
      break;

    default:
      toast(`${message}`);
  }
};

function Cart() {
  const history = useHistory();

  const [orderTotal, setOrderTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const fetchedCartItems = () => {
    return JSON.parse(localStorage.getItem("cartItems"));
  };

  // const fetchedCartItems = JSON.parse(localStorage.getItem("cartItems"));

  const calculateAmounts = () => {
    setOrderTotal(cartItems.reduce((acc, item) => acc + item.price, 0));
    setFinalTotal(orderTotal * 1.05);
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      notifyAlert("No items found", "ERROR");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const orderdata = {
      fullName: "Imasha Hansini",
      cardNo: "64565545634568476541",
      expDate: "2021/05/15",
      orderItems: cartItems,
    };

    const { data } = await axios.post(
      "http://localhost:3000/payment",
      orderdata,
      config
    );
    if (data) {
      notifyAlert("Order placed successfully", "SUCCESS", () => {
        window.location.reload();
      });
      setCartItems([]);
      localStorage.setItem("cartItems", "[]");
    }
  };

  const deleteItem = (bookID) => {
    const updatedCartItems = cartItems.filter((item) => item.BookID !== bookID);
    setCartItems(updatedCartItems);
    if (updatedCartItems) {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
    notifyAlert("Item removed from cart!", "INFO");
  };

  useEffect(() => {
    if (fetchedCartItems().length > 0 && cartItems.length == 0) {
      setCartItems(fetchedCartItems());
    }

    calculateAmounts();
  }, [cartItems, calculateAmounts]);

  return (
    <div className="cart">
      <ToastContainer />
      <div class="d-flex align-items-center h-100">
        <div class="container text-center py-5">
          <h3 class="mb-0">Shopping cart</h3>
        </div>
      </div>
      <main>
        <div class="container">
          <section class="mt-5 mb-4">
            <div class="row">
              <div class="col-lg-8">
                <div class="card wish-list mb-4">
                  <div class="card-body">
                    <h5 class="mb-4">
                      Cart (<span>{cartItems ? cartItems.length : 0}</span>{" "}
                      items)
                    </h5>

                    {cartItems.map((item) => (
                      <CartItem book={item} callback={deleteItem} />
                    ))}
                  </div>
                </div>

                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="mb-4">We accept</h5>

                    <img
                      class="mr-2"
                      width="45px"
                      src="Images/visa.png"
                      alt="Visa"
                    />
                    <img
                      class="mr-2"
                      width="45px"
                      src="Images/amex.png"
                      alt="American Express"
                    />
                    <img
                      class="mr-2"
                      width="45px"
                      src="Images/master.png"
                      alt="Mastercard"
                    />
                    <img
                      class="mr-2"
                      width="45px"
                      src="Images/paypal.png"
                      alt="PayPal acceptance mark"
                    />
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card mb-4">
                  <div class="card-body">
                    <h5 class="mb-3">The total amount of</h5>

                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Temporary amount
                        <span>$ {orderTotal}</span>
                      </li>

                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>The total amount of</strong>
                          <strong>
                            <p class="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>$ {finalTotal}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      class="btn btn-primary btn-block waves-effect waves-light"
                      onClick={() => placeOrder()}
                    >
                      {" "}
                      go to checkout
                    </button>
                  </div>
                </div>

                <div class="card mb-4">
                  <div class="card-body">
                    <p class="mb-3"> Convert currency here..</p>

                    <div>
                      {" "}
                      <Converter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Cart;

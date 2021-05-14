import React from "react";

function Payment() {
  return (
    <div className="payment">
      <div class="d-flex align-items-center h-100">
        <div class="container text-center py-5">
          <h3 class="mb-0">Payment</h3>
        </div>
      </div>
      <div class="container">
        <div class="col-lg-12">
          <div class="card payment mb-4">
            <div class="card-body">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="justify-content-between">
                  <div class="row">
                    <div class="col-md-auto mb-3">
                      <div class="custom-control custom-radio">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          class="custom-control-input"
                          checked
                          required
                        />
                        <label class="custom-control-label" for="credit">
                          Credit card
                        </label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          id="debit"
                          name="paymentMethod"
                          type="radio"
                          class="custom-control-input"
                          required
                        />
                        <label class="custom-control-label" for="debit">
                          Debit card
                        </label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          class="custom-control-input"
                          required
                        />
                        <label class="custom-control-label" for="paypal">
                          Paypal pay
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small class="text-muted">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="cc-expiration">Expiration Date</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 mb-1">
                  <button class="btn btn-primary btn-lg" type="submit">
                    Purchase Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

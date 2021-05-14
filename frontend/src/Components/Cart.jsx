import React from "react";
import Converter from "./converter/converter"
import { useHistory } from "react-router-dom";
import {removeFromCart, addToWishlist} from "../actions/cartAction"

function Cart() {

  const history = useHistory();
  
  return (
    <div className="cart">
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
                <h5 class="mb-4">Cart (<span>2</span> items)</h5>
                <div class="row mb-4">
                  <div class="col-md-5 col-lg-3 col-xl-3">
                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img class="img-fluid w-100"
                        src="Images/book1.jpg" alt="Sample"/>
                      <a href="#!">
                        <div class="mask waves-effect waves-light">
                          <div class="mask rgba-black-slight waves-effect waves-light"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h5>Harry Potter Book 1</h5>
                          <p class="mb-3 text-muted text-uppercase small">ISBN: 9780747532743</p>
                          <p class="mb-3 text-muted text-uppercase small">Author: J. K. Rowling</p>
                          <p class="mb-3 text-muted text-uppercase small">Gernre: Fantacy Literature</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                              class="fas fa-trash-alt mr-1"></i> Remove item </a>
                          <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                              class="fas fa-heart mr-1"></i> Move to wish list </a>
                        </div>
                        <p class="mb-0"><span><strong>$35.99</strong></span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                <div class="row mb-4">
                  <div class="col-md-5 col-lg-3 col-xl-3">
                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img class="img-fluid w-100"
                        src="Images/book2.jpg" alt="Sample"/>
                      <a href="#!">
                        <div class="mask waves-effect waves-light">
                          <div class="mask rgba-black-slight waves-effect waves-light"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h5>Matilda</h5>
                          <p class="mb-3 text-muted text-uppercase small">ISBN: 9788481470130</p>
                          <p class="mb-3 text-muted text-uppercase small">Author: Roald Dahl </p>
                          <p class="mb-3 text-muted text-uppercase small">Gernre: Fantacy </p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                              class="fas fa-trash-alt mr-1"></i> Remove item </a>
                          <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                              class="fas fa-heart mr-1"></i> Move to wish list </a>
                        </div>
                        <p class="mb-0"><span><strong>$17.99</strong></span></p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            <div class="card mb-4">
              <div class="card-body">

                <h5 class="mb-4">We accept</h5>

                <img class="mr-2" width="45px"
                  src="Images/visa.png"
                  alt="Visa"/>
                <img class="mr-2" width="45px"
                  src="Images/amex.png"
                  alt="American Express"/>
                <img class="mr-2" width="45px"
                  src="Images/master.png"
                  alt="Mastercard"/>
                <img class="mr-2" width="45px"
                  src="Images/paypal.png"
                  alt="PayPal acceptance mark"/>
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
                    <span>$53.98</span>
                  </li>
                 
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>$53.98</strong></span>
                  </li>
                </ul>

                <button type="button" class="btn btn-primary btn-block waves-effect waves-light" onClick = {() => history.push("/Payment")}> go to
                  checkout</button>

              </div>
            </div>
            
            <div class="card mb-4">
              <div class="card-body">
                 
                  <p class ="mb-3"> Convert currency here..</p>
              
          <div> <Converter /></div>
    
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
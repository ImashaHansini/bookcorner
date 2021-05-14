import React from "react";

const CartItem = ({ book, callback }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-5 col-lg-3 col-xl-3">
        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
          <img className="img-fluid w-100" src={book.image} alt="Sample" />
          <a href="#!">
            <div className="mask waves-effect waves-light">
              <div className="mask rgba-black-slight waves-effect waves-light"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-7 col-lg-9 col-xl-9">
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h5>{book.BookName}</h5>
              <p className="mb-3 text-muted text-uppercase small">
                {book.ISBN}
              </p>
              <p className="mb-3 text-muted text-uppercase small">
                {book.Author}
              </p>
              <p className="mb-3 text-muted text-uppercase small">
                {book.Category}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a
                onClick={(e) => callback(book.BookID)}
                type="button"
                className="card-link-secondary small text-uppercase mr-3"
              >
                 Remove item{" "}
              </a>
              <a
                type="button"
                className="card-link-secondary small text-uppercase"
              >
                 Move to wish list{" "}
              </a>
            </div>
            <p className="mb-0">
              <span>
                <strong> $ {book.price}</strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

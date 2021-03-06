import React from "react";
import "../App.css";
import books from "../books";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  var cart = Array();

  const notifyAlert = (messsage) => {
    toast.success(`${messsage}`);
  };

  // const [selectedBookID, setSelectedBookID] = useState('')
  // var [cart, setCart] = useState([])

  // useEffect(() => {
  //     if(selectedBookID) {
  //         const selectedBook = books.find((book) => book.BookID === selectedBookID)
  //         setCart(_ => [...cart, selectedBook])
  //         localStorage.setItem('cartItems', JSON.stringify(cart))
  //     }
  // }, [selectedBookID])

  return (
    <div className="App">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Matilda's Ebook Corner</h1>
            <div className="list-group">
              <a className="list-group-item" href="/NYTBooks">
                Best Selling
              </a>
              <a className="list-group-item" href="#!">
                Fiction
              </a>
              <a className="list-group-item" href="#!">
                Historical
              </a>
              <a className="list-group-item" href="#!">
                Romance
              </a>
              <a className="list-group-item" href="#!">
                Manga
              </a>
              <a className="list-group-item" href="#!">
                Adventure
              </a>
              <a className="list-group-item" href="#!">
                Classic
              </a>
              <a className="list-group-item" href="#!">
                Horror
              </a>
              <a className="list-group-item" href="#!">
                Scientific
              </a>
              <a className="list-group-item" href="#!">
                Mystry
              </a>
              <a className="list-group-item" href="#!">
                Translations
              </a>
            </div>
          </div>

          <div className="col-lg-9">
            <div
              className="carousel slide my-4"
              id="carouselExampleIndicators"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  className="active"
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="Images/Ebook_Corner_banner.png"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="Images/harry-potter-series.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="Images/Ebook_reader.JPG"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="row">
              {books.map((book) => (
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#!">
                      <img
                        className="card-img-top"
                        src={book.image}
                        alt={book.ISBN}
                      />
                    </a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#!">{book.BookName}</a>
                      </h4>
                      <h5>$ {book.price}</h5>
                      <p className="card-text">{book.description}</p>
                    </div>
                    <div className="card-footer">
                      <a
                        href="#!"
                        type="button"
                        className="card-link-secondary small text-uppercase"
                      >
                        <i className="fas fa-heart mr-1"></i>
                        <img
                          className="d-block img-fluid"
                          src="Images/wishlist.png"
                          alt="Wishlist"
                          Align="left"
                        />
                      </a>
                      <small className="text-muted" Align="center">
                        {" "}
                        ??? ??? ??? ??? ???{" "}
                      </small>
                      <a
                        href="#!"
                        type="button"
                        className="card-link-secondary small text-uppercase"
                      >
                        <i className="fas fa-heart mr-1"></i>
                        <img
                          className="d-block img-fluid"
                          src="Images/carts.png"
                          alt="Cart"
                          Align="right"
                          onClick={(e) => {
                            const selectedBook = books.find(
                              (obj) => obj.BookID === book.BookID
                            );
                            const cartItems = JSON.parse(
                              localStorage.getItem("cartItems")
                            );
                            if (cartItems) {
                              console.log(cartItems);
                              cartItems.push(selectedBook);
                              localStorage.setItem(
                                "cartItems",
                                JSON.stringify(cartItems)
                              );
                            } else {
                              console.log("no cart items");
                              localStorage.setItem(
                                "cartItems",
                                JSON.stringify([selectedBook])
                              );
                            }

                            notifyAlert("Item added to cart!");
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination pg-blue">
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#!">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

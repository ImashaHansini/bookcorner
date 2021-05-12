import React from "react";
import '../App.css';

function Home() {

  return (
    <div className="App">
        
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="my-4">Matilda's Ebook Corner</h1>
                    <div className="list-group">
                        <a className="list-group-item" href="/Books">Fiction</a>
                        <a className="list-group-item" href="/Books">Historical</a>
                        <a className="list-group-item" href="/Books">Romance</a>
                        <a className="list-group-item" href="/Books">Manga</a>
                        <a className="list-group-item" href="/Books">Adventure</a>
                        <a className="list-group-item" href="/Books">Classic</a>
                        <a className="list-group-item" href="/Books">Horror</a>
                        <a className="list-group-item" href="/Books">Scientific</a>
                        <a className="list-group-item" href="/Books">Mystry</a>
                        <a className="list-group-item" href="/Books">Translations</a>
                    </div>
                </div>

                <div className="col-lg-9">
                    <div className="carousel slide my-4" id="carouselExampleIndicators" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active"><img className="d-block img-fluid" src="Images/Ebook Corner banner.png" alt="First slide" /></div>
                            <div className="carousel-item"><img className="d-block img-fluid" src="Images/The-Best-Selling-Books-of-All-Time.jpg" alt="Second slide" /></div>
                            <div className="carousel-item"><img className="d-block img-fluid" src="Images/Ebook reader.JPG" alt="Third slide" /></div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#!"><img className="card-img-top" src="Images/Book1.jpg" alt="..." /></a>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="#!">Item One</a></h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wishlist" Align = "left"/></a>
                                <small className="text-muted" Align = "center"> ★ ★ ★ ★ ☆ </small>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" Align = "right"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#!"><img className="card-img-top" src="Images/Book2.jpg" alt="..." /></a>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="#!">Item Two</a></h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wishlist" Align = "left"/></a>
                                <small className="text-muted" Align = "center"> ★ ★ ★ ★ ☆ </small>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" Align = "right"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#!"><img className="card-img-top" src="Images/Book3.jpg" alt="..." /></a>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="#!">Item Three</a></h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wishlist" Align = "left"/></a>
                                <small className="text-muted" Align = "center"> ★ ★ ★ ★ ☆ </small>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" Align = "right"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#!"><img className="card-img-top" src="Images/Book4.jpg" alt="..." /></a>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="#!">Item Four</a></h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wishlist" Align = "left"/></a>
                                <small className="text-muted" Align = "center"> ★ ★ ★ ★ ☆ </small>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" Align = "right"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#!"><img className="card-img-top" src="Images/Book5.png" alt="..." /></a>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="#!">Item Five</a></h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wishlist" Align = "left"/></a>
                                <small className="text-muted" Align = "center"> ★ ★ ★ ★ ☆ </small>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" Align = "right"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#!"><img className="card-img-top" src="Images/Book6.jpg" alt="..." /></a>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="#!">Item Six</a></h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wishlist" Align = "left"/></a>
                                <small className="text-muted" Align = "center"> ★ ★ ★ ★ ☆ </small>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"></i>
                                        <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" Align = "right"/></a>
                                </div>
                            </div>
                        </div>
                        </div>
                    <div><nav aria-label="Page navigation example">
                                    <ul className="pagination pg-blue">
                                        <li className="page-item"><a className="page-link" href="#!">Previous</a></li>
                                        <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">4</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">5</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                                    </ul>
                    </nav></div>
                </div>
            </div>
        </div>  
    </div>
  );
}

export default Home;

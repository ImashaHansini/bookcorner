import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <Link class="navbar-brand" to="/">
          <a className="navbar-brand" href="#!">
                    <div class="card my-4">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Search by Book Title.." />
                                <span class="input-group-append"><button class="btn btn-secondary" type="button">Go!</button></span>
                            </div>
                    </div>
                    </a>
          </Link>
          <div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div><div>nbsp</div>
          <div>
          <ul className="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Signup" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Signup">
                  Signup
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Library" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Library">
                <img className="d-block img-fluid" src="Images/books.png" alt="Library" />
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Wishlist" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Wishlist">
                <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wish List" />
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Cart" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Cart">
                <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" />
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Signin" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Signin">
                <img className="d-block img-fluid" src="Images/user.png" alt="Admin" />
                </Link>
              </li>
            </ul>
                </div>
            </div>
            </div>
        </nav>
    </div>
  );
}

export default withRouter(Navigation);
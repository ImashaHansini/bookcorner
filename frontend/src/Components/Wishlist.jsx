import React from "react";

function Wishlist() {
  return (
    <div className="wishlist">
      <div class="d-flex align-items-center h-100">
        <div class="container text-center py-5">
          <h3 class="mb-0">Wish List</h3>
        </div>
      </div>

      <div class="container">
      <section>
     <div class="row">

  <div class="col-md-4 mb-5">
    <div class="">
      <div class="view zoom overlay z-depth-2 rounded">
        <img class="img-fluid w-100"
          src="Images/book7.jpg" alt="Sample"/>
      </div>
      <div class="text-center pt-4">
        <h5>Charlie and the Chocolate Factory</h5>
        <p class="mb-2 text-muted text-uppercase small">Children's</p>
       
        <hr/>
        <h6 class="mb-3">17.99 $</h6>
        <button type="button" class="btn btn-primary btn-sm mr-1 mb-2"> Add To Cart</button>
        <button type="button" class="btn btn-light btn-sm mr-1 mb-2"> Remove From Wish List</button>
      </div>
    </div>
  </div>

  <div class="col-md-4 mb-5">
    <div class="">
      <div class="view zoom overlay z-depth-2 rounded">
        <img class="img-fluid w-100"
          src="Images/book8.jpg" alt="Sample"/>
      </div>
      <div class="text-center pt-4">
        <h5>A Little Princess</h5>
        <p class="mb-2 text-muted text-uppercase small">Novel</p>
       
        <hr/>
        <h6 class="mb-3">17.99 $</h6>
        <button type="button" class="btn btn-primary btn-sm mr-1 mb-2"> Add To Cart</button>
        <button type="button" class="btn btn-light btn-sm mr-1 mb-2"> Remove From Wish List</button>
      </div>
    </div>
  </div>

  <div class="col-md-4 mb-5">
    <div class="">
      <div class="view zoom overlay z-depth-2 rounded">
        <img class="img-fluid w-100"
          src="Images/book9.jpg" alt="Sample"/>
      </div>
      <div class="text-center pt-4">
        <h5>Totto-Chan</h5>
        <p class="mb-2 text-muted text-uppercase small">Children's</p>

        <hr/>
        <h6 class="mb-3">17.99 $</h6>
        <button type="button" class="btn btn-primary btn-sm mr-1 mb-2"> Add To Cart</button>
        <button type="button" class="btn btn-light btn-sm mr-1 mb-2"> Remove From Wish List</button>
      </div>
    </div>
  </div>
</div>
</section>
<div>
  <nav aria-label="Page navigation example">
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
  );
}

export default Wishlist;
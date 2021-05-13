import React from "react";

function Library() {
  return (
    <div className="library">
      <div class="d-flex align-items-center h-100">
        <div class="container text-center py-5">
          <h3 class="mb-0">My Library</h3>
        </div>
      </div>

      <div class="container">
      <section>
     <div class="row">

     <div class="col-md-4 mb-5">
    <div class="">
      <div class="view zoom overlay z-depth-2 rounded">
        <img class="img-fluid w-100"
          src="Images/book10.jpg" alt="Sample"/>
      </div>
      <div class="text-center pt-4">
        <h5>Lion King</h5>
        <hr/>
        <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">Download</button>
      </div>
    </div>
  </div>

  <div class="col-md-4 mb-5">
    <div class="">
      <div class="view zoom overlay z-depth-2 rounded">
        <img class="img-fluid w-100"
          src="Images/book11.jpg" alt="Sample"/>
      </div>
      <div class="text-center pt-4">
        <h5>What Katy Did Next</h5>
        <hr/>
        <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">Download</button>
      </div>
    </div>
  </div>

  <div class="col-md-4 mb-5">
    <div class="">
      <div class="view zoom overlay z-depth-2 rounded">
        <img class="img-fluid w-100"
          src="Images/book12.jpg" alt="Sample"/>
      </div>
      <div class="text-center pt-4">
        <h5>Nancy Drew - Book 5</h5>
        <hr/>
        <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">Download</button>
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

export default Library;
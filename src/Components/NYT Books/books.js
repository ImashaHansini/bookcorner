import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Books extends React.Component{
    
render() {
    return (
<div className="row">
<div className="col-lg-4 col-md-6 mb-4">
    <div className={"card-title".card} id={Books._id}>
        <img className={"card".hardcover} component="img" 
                    src={Books.hardcover?.[0]?.url ?
                        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=vCRgzsPrcfO673AjQgRhFZu3InDIwKsa${Books.hardcover[0].url}` : 
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
        <div className="card-body">
            <h4 className="card-title"><a href="#!">Item One</a></h4>
            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
        </div>
        <div className="card-footer">
            <a href="#!" type="button" class="card-link-secondary small text-uppercase">
            <i className="fas fa-heart mr-1"></i>
                <img className="d-block img-fluid" src="Images/wishlist.png" alt="Wishlist" Align = "left"/></a>
            <a href="#!" type="button" class="card-link-secondary small text-uppercase">
            <i className="fas fa-heart mr-1"></i>
                <img className="d-block img-fluid" src="Images/carts.png" alt="Cart" Align = "right"/></a>
        </div>
    </div>
</div>  
</div>
    )}
};
Books.propTypes = {
    article: PropTypes.object.isRequired,
}

export default Books;
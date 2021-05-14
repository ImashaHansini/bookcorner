import { ADD_CART_ITEM, REMOVE_CART_ITEM, ADD_WISHLIST_ITEM, REMOVE_WISHLIST_ITEM} from "./types";

// Add TO Cart
export const addToCart = cartItem => dispatch => {
  dispatch({
    type: ADD_CART_ITEM,
    payload: cartItem
  });
};

//remove from cart
export const removeFromCart = id => dispatch => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id
  });
};

//add to wishlist
export const addToWishlist = wishlistItem => dispatch => {
    dispatch({
      type: ADD_WISHLIST_ITEM,
      payload: wishlistItem
    });
  };
  
//remove from wishlist
  export const removeFromWishlist = id => dispatch => {
    dispatch({
      type: REMOVE_WISHLIST_ITEM,
      payload: id
    });
  };
  
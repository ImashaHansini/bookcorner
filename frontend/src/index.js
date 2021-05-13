import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export { default as Navigation } from "./Components/Navigation";
export { default as Footer } from "./Components/Footer";
export { default as Home } from "./Components/Home";
export { default as Signup } from "./Components/Signup";
export { default as Library } from "./Components/Library";
export { default as Wishlist } from "./Components/Wishlist";
export { default as Cart } from "./Components/Cart";
export { default as Payment } from "./Components/Payment Details/Payment";
export { default as Signin } from "./Components/Signin";
export { default as Books } from "./Components/NYT Books/Books";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

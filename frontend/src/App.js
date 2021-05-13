import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Signup, Library, Wishlist, Signin, Cart, Payment, Books} from ".";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Books" exact component={() =><Books />} />
          <Route path="/Signup" exact component={() => <Signup />} />
          <Route path="/Library" exact component={() => <Library />} />
          <Route path="/Wishlist" exact component={() => <Wishlist />} />
          <Route path="/Cart" exact component={() => <Cart />} />
          <Route path="/Payment" exact component={() =><Payment />} />
          <Route path="/Signin" exact component={() => <Signin />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
  
}

export default App;



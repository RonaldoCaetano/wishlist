import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

const App = (): React.ReactElement => (
  <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/wishlist" component={Wishlist} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;

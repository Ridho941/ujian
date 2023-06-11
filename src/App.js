import React from "react";
import Menus from "./pages/menu";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/menu' component={Menus} />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

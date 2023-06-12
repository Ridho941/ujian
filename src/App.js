import React from "react";
import Menus from "./pages/menu";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/menu' component={Menus} />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

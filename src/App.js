import React from "react";
import Menus from "./pages/menu";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/menu' component={Menus} />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

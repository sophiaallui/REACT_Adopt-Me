import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Detailts from "./Details";

const App = () => {
  return (
    <React.StrictMode> 
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      
      <Router> 
        <SearchParams path="/" /> 
        {/* <someotherroute path="/details/1" /> */}
        <Detailts path="/details/:id"/>
      </Router>
    </div>
    </React.StrictMode> 

  );
};

render(<App/>, document.getElementById("root"));
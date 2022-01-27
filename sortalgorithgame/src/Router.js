
import React from "react";
import App from "./App.js"
import InvalidPath from "./InvalidPath.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//router component for switching between pages (views)
const Router = () => (
    <BrowserRouter>
      <Switch>
        {/* redirect to home page */}
        <Route path="/" exact component={App} />
  
        {/* redirect to NO MATCH page */}
        <Route component={InvalidPath} />
        
      </Switch>
    </BrowserRouter>
  );
  
  export default Router;
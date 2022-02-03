import React from "react";
import App from "./App.js"
import InvalidPath from "./components/InvalidPath.js";
import Navbar from "./components/Navbar";
import MergeSort from './components/Mergesort';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//router component for switching between pages (views)
const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      {/* redirect to home page */}
      <Route path="/" exact component={App} />

      <Route path="/mergeSort" component={MergeSort} />
      <Route path="/mergeSort-levels" component={LevlesPage} />
      {/* redirect to NO MATCH page */}
      <Route component={InvalidPath} />

    </Switch>
  </BrowserRouter>
);

export default Router;

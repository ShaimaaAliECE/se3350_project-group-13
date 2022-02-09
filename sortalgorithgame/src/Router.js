import React from "react";
import App from "./App.js"
import InvalidPath from "./components/InvalidPath.js";
import Navbar from "./components/Navbar";
import MergeSort from './components/Mergesort';
import LevlesPage from "./components/LevelsPage.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MergeSort_Lvl2 from "./components/Mergesort_Lvl2";
import Login from "./components/Login";

//router component for switching between pages (views)
const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      {/* redirect to home page */}
      <Route path="/" exact component={App} />

      <Route path="/mergeSort" component={MergeSort} />
      <Route path="/mergeSort-levels" component={LevlesPage} />
      <Route path="/level-one" component={MergeSort} />
      <Route path="/level-two" component={MergeSort_Lvl2}/>
      <Route path="/login" component ={Login}/>
      {/* redirect to NO MATCH page */}
      <Route component={InvalidPath} />

    </Switch>
  </BrowserRouter>
);

export default Router;

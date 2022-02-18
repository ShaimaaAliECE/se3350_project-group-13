import React from "react";
import App from "./App.js"
import InvalidPath from "./components/InvalidPath.js";
import Navbar from "./components/Navbar";
import MergeSort from './components/Mergesort';
import LevlesPage from "./components/LevelsPage.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mergesort_input from "./components/Mergesort_input";
import Login from "./components/Login";
import Register from "./components/Register";

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
      <Route path="/level-two" render={(props) => <Mergesort_input len = {10} min = {1} max = {20} showSteps  = {true}/>}/>
      <Route path="/level-three" render={(props) => <Mergesort_input len = {10} min = {1} max = {20} showSteps  = {false}/>}/>
      <Route path="/login" component ={Login}/>
      <Route path="/register" component ={Register}/>
      {/* redirect to NO MATCH page */}
      <Route component={InvalidPath} />

    </Switch>
  </BrowserRouter>
);

export default Router;

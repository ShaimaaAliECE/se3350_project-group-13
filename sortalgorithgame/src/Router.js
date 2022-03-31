import React from "react";
import App from "./App.js"
import InvalidPath from "./components/InvalidPath.js";
import Navbar from "./components/Navbar";
import MergeSort from './components/Mergesort';
import LevlesPage from "./components/LevelsPage.js";
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Mergesort_input from "./components/Mergesort_input";
import Login from "./components/Login";
import Register from "./components/Register";
import LevelFail from "./components/LevelFailPage";
import Profile from "./components/Profile";
import CustomPage from "./components/CustomPage";
import LevelsPageQuicksort from "./components/LevelsPageQuicksort.js";
import QuickSort from './components/QuickSort';

//router component for switching between pages (views)
function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* redirect to home page */}
        <Route path="/" exact component={App} />
        <Route path="/mergeSort" component={MergeSort} />
        <Route path="/mergeSort-levels" component={LevlesPage} />
        <Route path="/mergeSort-levels-level-one" component={MergeSort} />
        <Route path="/mergeSort-levels-level-two" render={(props) => <Mergesort_input len={10} min={1} max={20} showSteps={true} level={"LevelTwo"} />} />
        <Route path="/mergeSort-levels-level-three" render={(props) => <Mergesort_input len={10} min={1} max={20} showSteps={false} level={"LevelThree"} />} />
        <Route path="/mergeSort-levels-level-four" render={(props) => <Mergesort_input len={20} min={1} max={50} showSteps={false} level={"LevelFour"} />} />
        <Route path="/mergeSort-levels-level-five" render={(props) => <Mergesort_input len={50} min={1} max={100} showSteps={false} level={"LevelFive"} />} />
        <Route path="/mergeSort-levels-level-custom" component={CustomLevel} />
        <Route path="/mergeSort-levels-level-customInput" component={CustomPage} />
        <Route path="/quickSort-levels" component={LevelsPageQuicksort} />
        <Route path="/quickSort-levels-level-one" component={QuickSort} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/levelFailed" component={LevelFail} />
        {/* redirect to NO MATCH page */}
        <Route component={InvalidPath} />

      </Switch>
    </BrowserRouter>
  )
};

function CustomLevel() {
  let query = useQuery();
  const len = parseInt(query.get("len"));
  const min = parseInt(query.get("min"));
  const max = parseInt(query.get("max"));
  return (
    <Mergesort_input len={len} min={min} max={max} showSteps={false} level={"CustomLevel"}/>
  );
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default Router;

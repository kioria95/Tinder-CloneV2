import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        {/*Header */}

        <Switch>
          <Route path="/chat">
            <h1>I am chat</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>

        {/*Tinder Cards */}

        {/*Tinder Buttons */}
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from "./pages/Homepage-Component";
import HatsPage from "./pages/Hats-Component";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage}/>
    </div>
  );
}

export default App;

import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header'
import Create from './components/Create';
import Locations from './components/Locations';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>

      <Route path='/' component={Home} exact/>
      <Route path='/create' component={Create} exact/>
      <Route path='/locations/:id' component={Locations} exact />

    </BrowserRouter>
  );
}

export default App;

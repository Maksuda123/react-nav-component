import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Service from './components/pages/Service'
import Contacts from './components/pages/Contacts'
import About from './components/pages/About'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/product' component={Product}/>
          <Route path='/service' component={Service}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
    </Router>
  );
}

export default App;

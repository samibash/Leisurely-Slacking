import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Months from './components/Home/Months'
import Destination from './services/Destination'
import BarsList from './services/BarsList'
import Reviews from './services/Reviews'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YERRRRRRRR</h1>
        <Navbar />
        <main>
          <Route exact path="/" component={ Months }></Route>
          <Route path="/destinations" component={ Destination }></Route>
          <Route path="/bars" component={ BarsList }></Route>
          <Route exact path="/reviews" component={ Reviews }></Route>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Months from './components/Home/Months'
import Destinations from './components/Destinations/Destination'
import Bars from './components/Bars/BarsList'
import Reviews from './components/Reviews/Reviews'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YERRRRRRRR</h1>
        <Navbar />
        <main>
          <Route exact path="/" component={ Months }></Route>
          <Route path="/destinations" component={ Destinations }></Route>
          <Route path="/bars" component={ Bars }></Route>
          <Route exact path="/reviews" component={ Reviews }></Route>
        </main>
      </div>
    );
  }
}

export default App;

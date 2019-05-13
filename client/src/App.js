import React, { Component } from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom'
import Months from './components/Home/Months'
import createReview from "./components/createReview/createReview"
import updateReview from "./components/updateReview/updateReview"


import{fetchDestination} from './services/Destination'
import destinationList from "./components/destinationList/destinationList"

// import BarsList from './services/BarsList'
// import Reviews from './services/Reviews'
import Header from './components/Header/Header'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       destinations:[]
    }
  }
  
  fetchDestinationData = async ()=>{
  const destinations =  await fetchDestination()
  this.setState({
    destinations: destinations
  })
  console.log(destinations)
  }

  componentDidMount(){
    this.fetchDestinationData()
  }
  render() {
    return (
      <div className="App">
        <h1>YERRRRRRRR</h1>
        <Header />
        <Switch>
      <Route exact path= '/' 
      // component={RestaurantsList} 
      render={()=> <destinationList  restaurants={this.state.destinations}/>} />  
      <Route path ='/create-review' component={createReview} />
      <Route exact path= '/update-review'
      // component={RestaurantsList} 
      render={()=> <updateReview  restaurants={this.state.destinations}/>} />  

    </Switch>
        {/* <main>
          <Route exact path="/" component={ Months }></Route>
          <Route path="/destinations" component={ Destination }></Route>
          <Route path="/bars" component={ BarsList }></Route>
          <Route exact path="/reviews" component={ Reviews }></Route>
        </main> */}
      </div>
    );
  }
}

export default App;

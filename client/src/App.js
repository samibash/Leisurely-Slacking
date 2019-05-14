import React, { Component } from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom'
import Months from './components/Home/Months'
import createReview from "./components/createReview/createReview"
import updateReview from "./components/updateReview/updateReview"

import{fetchDestination} from './services/Destination'
import{fetchAllBars} from './services/Bars'
import DestinationList from "./components/DestinationList/DestinationList"

// import BarsList from './services/BarsList'
// import Reviews from './services/Reviews'
import Header from './components/Header/Header'
import BarsList from './components/BarsList/BarsList';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       destinations:[],
       hotels:[],
       bars:[],
       reviews:[]
    }
    this.fetchBarData=this.fetchBarData.bind(this)
  }
  
  fetchDestinationData = async ()=>{
  const destinations =  await fetchDestination()
  this.setState({
    destinations: destinations
  })
  console.log(destinations)
  }

  fetchBarData = async ()=>{
    const bars =  await fetchAllBars()
    this.setState({
      bars: bars
    })
    console.log(bars)
    }

  componentDidMount(){
    this.fetchDestinationData()
    this.fetchBarData()
  }
  render() {
    return (
      <div className="App">
        <h1>YERRRRRRRR</h1>
        <Header />
        <Switch>
          <Route 
            exact path= '/destinations' 
            render={()=> <DestinationList  destinations={this.state.destinations}/>} 
          />  
          
          <Route 
            path ='/create-reviews' 
            component={createReview} />
          
          <Route 
            exact path= '/bars'
            render={()=> <BarsList  bars={this.state.bars}/>} 
          />   
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

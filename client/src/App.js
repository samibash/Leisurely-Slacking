import React, { Component } from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom'
// import Months from './components/Home/Months'
import CreateReview from "./components/createReview/createReview"
// import updateReview from "./components/updateReview/updateReview"

import{fetchDestination} from './services/Destination'
import{fetchAllBars} from './services/Bars'
import{fetchHotel} from './services/Hotels'
import{fetchReview} from './services/Reviews'

// import BarsList from './services/BarsList'
// import Reviews from './services/Reviews'
import Header from './components/Header/Header'
import BarsList from './components/BarsList/BarsList';
import HotelList from './components/HotelList/HotelList';
import DestinationList from './components/DestinationList/destinationList';
import ReviewList from './components/ReviewList/ReviewList';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       destinations:[],
       hotels:[],
       bars:[],
       reviews:[]
    }
  }
  
  fetchDestinationData = async ()=>{
  const destinations =  await fetchDestination()
  this.setState({
    destinations: destinations
  })
  // console.log(destinations)
  }

  fetchBarData = async ()=>{
    const bars =  await fetchAllBars()
    this.setState({
      bars: bars
    })
    // console.log(bars)
    }

  fetchHotelData = async ()=>{
      const hotels =  await fetchHotel()
      this.setState({
        hotels: hotels
      })
      // console.log(hotels)
  }

  fetchReviewData = async () => {
      const reviews = await fetchReview()
      this.setState({
        reviews: reviews
      })
  }

  componentDidMount(){
    this.fetchDestinationData()
    this.fetchBarData()
    this.fetchHotelData()
    this.fetchReviewData()
  }
  render() {
    // console.log(this.state.hotels)
    return (
      <div className="App">
        <h1>YERRRRRRRR</h1>
        <Header />
        <Switch>
          <Route 
            exact path='/destinations' 
            render={()=> <DestinationList  destinations={this.state.destinations}/>} 
          />  
          <Route 
            exact path='/hotels' 
            render={()=> <HotelList  hotels={this.state.hotels}/>} 
          />  
          <Route 
            path='/create-reviews' 
            component={CreateReview} 
            reviews={this.state.reviews} />
          
          <Route 
            exact path= '/bars'
            render={()=> <BarsList  bars={this.state.bars}/>} 
          />   

          <Route 
            exact path= '/reviews'
            render={()=> <ReviewList  reviews={this.state.reviews}/>} 
          />   
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import CreateReview from "./components/createReview/createReview"
import{ fetchDestination } from './services/Destination'
import{ fetchAllBars } from './services/Bars'
import{ fetchHotel } from './services/Hotels'
import{ fetchReview } from './services/Reviews'
// import updateReview from "./components/updateReview/updateReview"
// import Months from './components/Home/Months'
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
  
  fetchDestinationData = async () => {
    const destinations = await fetchDestination()
      this.setState({
      destinations: destinations
    })
  }

  fetchBarData = async () => { 
    const bars = await fetchAllBars()
      this.setState({
        bars: bars
      })
    }

  fetchHotelData = async () => {
    const hotels =  await fetchHotel()
    this.setState({
      hotels: hotels
    })
  }

  fetchReviewData = async () => {
    const reviews = await fetchReview()
      this.setState({
        reviews: reviews
      })
    console.log(reviews)
    // Go back to Reviews.js because you may have to make changes
  }

  componentDidMount() {
    this.fetchDestinationData()
    this.fetchBarData()
    this.fetchHotelData()
    this.fetchReviewData()
  }
  render() {

    return (
      <div className="App">
        <h1>YERRRRRRRR</h1>
        <Header />
        <Switch>
          <Route 
            exact path='/destinations' 
            render={() => <DestinationList destinations={this.state.destinations}/>} 
          /> 

          <Route 
            exact path='/hotels' 
            render={() => <HotelList hotels={this.state.hotels}/>} 
          />  

          <Route 
            path='/create-reviews' 
            component={CreateReview} 
            reviews={this.state.reviews} />
          
          <Route 
            exact path='/bars'
            render={() => <BarsList bars={this.state.bars}/>} 
          />   

          <Route 
            exact path='/reviews'
            render={() => <ReviewList reviews={this.state.reviews}/>} 
          />   
        </Switch>
      </div>
    );
  }
}

export default App;

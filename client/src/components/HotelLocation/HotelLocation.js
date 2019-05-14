import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CreateReview from '../createReview/createReview'
import HotelList from '../HotelList/HotelList';

class HotelLocation extends Component {
  constructor(props){
    super(props)
      this.state={
          showReview:false
      }
  }

  handleClick =  () => {
    
    this.setState({showReview:true})
  }


    render(){
    const  {hotels} = this.props

    return (
      <div className="container">
      
        <h2>{hotels.name}</h2>
        <h4>{hotels.location}</h4>
        <li>{hotels.description}</li> 
        {this.state.showReview && <CreateReview/>}
        <li>reviewer name:{hotels.reviews[0].user_name}</li>
        <li>reviewer description:{hotels.reviews[0].caption}</li>
        <div>
        <Link
            to={`/update-hotel/${hotels.id}`}>Edit Hotels</Link>    

            <button onClick={this.handleClick} type="button" value={HotelList.name}>clickToReview</button>    
        </div>
      </div>
    );
    }
}

export default HotelLocation;
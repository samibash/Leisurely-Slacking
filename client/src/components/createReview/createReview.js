import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import { createRestaurant } from '../../services/restaurants';



class CreateRestaurantPage extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         restaurant:[],
         created:false
      };
    };
    
    onRestaurantFormChange = (event)=>{
        const element = event.target
        const name = element.name
        const value = element.value

        console.log(name,value);

        this.setState({
            [name]:value
        })
        // const newState = {}
        // newState[name]=value
        // this.setState(newState)
    }
    
    onRestaurantFormSubmit = async (e)=>{
        e.preventDefault()

        console.log(`Form Submitted:`)
        let newRestaurant = {
            name:this.state.name,
            neighborhood:this.state.neighborhood
        }
        console.log(newRestaurant)
        const restaurant = await createRestaurant(newRestaurant)
        this.setState({
            restaurant:restaurant,
            created:true
        })
    }
    render(){
        if(this.state.created === true){
            return <Redirect to="/"/>
        }
        return(
            <div>
            <form onSubmit = {this.onRestaurantFormSubmit}>
              <label htmlFor="name">Restaurant Name:</label>
              <input id="name" 
              type ="text" 
              name="name"
              onChange={this.onRestaurantFormChange}
              placeholder="McDonalds" />
             
            
            <div>
            <label htmlFor="name">Restaurant Neighborhood</label>
              <input id="neighborhood" 
              type ="text" 
              name="neighborhood"
              onChange={this.onRestaurantFormChange}
              placeholder="Union Square" />
            </div>
            
            <div>
            <label htmlFor="name">Restaurant Photo</label>
              <input id="photo" 
              type ="text" 
              name="photo"
              onChange={this.onRestaurantFormChange}
              placeholder=" " />
            </div>
            <div>
                <button type="submit">Add Restaurant</button>
                
            </div>
            </form>
            </div>
            )
    }


}

export default CreateRestaurantPage
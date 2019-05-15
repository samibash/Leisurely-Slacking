import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import { createReview } from '../../services/Reviews';
import './CreateReview.css';
class CreateReview extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         review: props.reviews,
         created: false
      };
    };

    onReviewFormChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
        console.log(value)
    }
    
    onReviewFormSubmit = async (e) => {
        e.preventDefault()
        console.log(`Review Submitted:`, this.state)

        let newReview = {
            user_name: this.state.user_name,
            caption: this.state.caption,
            experience: this.state.experience,
            trip_type: this.state.trip_type
        }
        console.log(newReview)

        const review = await createReview(newReview)
        console.log(review)
        this.setState({
            review: review,
            created: true
        })
    }

    render() {
      if(this.state.created === true){
        return <Redirect to="/reviews"/>
      }
      
      return (
        <form className="datForm" onSubmit={this.onReviewFormSubmit}>
        <h1>Give Us Your Review</h1>
        <button>UPDATE</button>

        <div className="field">
          <label htmlFor="name" className="label">Username</label>
          <div className="control">
          <div className="control has-icons-left has-icons-right">

          <input className="input" type ="text" onChange={this.onReviewFormChange} 
          name="user_name"
          placeholder="UserName" />
            <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
      
      <span className="icon is-small is-right">
        <i className="fas fa-check" />
      </span>
    </div>
    <p className="help is-success">This username is available</p>

  </div>
  
  <div className="field">
    <label htmlFor="name" className="label">Caption</label>
      <input className="input is-success" type ="text" 
      onChange={this.onReviewFormChange}
       placeholder="title" name="caption"
       />
    </div>
  </div>
          
          <div className="field">
            <label className="label">Type of Trip</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select Trip-Type</option>
                  <option>With Friends</option>
                  <option>With Family</option>
                  <option>On Business</option>
                  <option>Traveled Solo</option>
                  <option>Traveled as couple</option>

                </select>
              </div>
            </div>
          </div>
          
          <div className="field">
            <label className="label">Experience</label>
            <div className="control">
              <textarea className="textarea" onChange={this.onReviewFormChange}
               name="experience" placeholder="Textarea"></textarea>
            </div>
          </div>
          

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
            
          </form>       
        )
    }
}

export default CreateReview
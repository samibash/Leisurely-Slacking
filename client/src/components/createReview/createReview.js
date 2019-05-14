import React, {Component} from 'react';
import { createReview } from '../../services/Reviews';

class CreateReview extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         review:[],
         created: false
      };
    };

    onReviewFormChange = (event) => {
        const user_name = event.target.value
        const caption = event.target.value
        const experience = event.target.value
        const trip_type = event.target.value
        console.log(user_name, caption, experience, trip_type);


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
            newReview: newReview,
            created: true
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Review page</h1>
                <form onSubmit={this.onReviewFormSubmit}>
                    <div>              
                        <label htmlFor="name">Username:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Caption:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Experience:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Trip type:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                        />
                    </div>
                    <button type="submit">Add Review</button>
                </form>
            </div>
        )
    }
}

export default CreateReview
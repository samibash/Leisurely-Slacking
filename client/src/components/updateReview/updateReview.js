import React, {Component} from 'react';
import { UpdateReview } from '../../services/Reviews';

class updateReview extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         review:[],
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
        console.log(`Review Updated:`, this.state)

        let updateReview = {
            user_name: this.state.user_name,
            caption: this.state.caption,
            experience: this.state.experience,
            trip_type: this.state.trip_type
        }
        console.log(updateReview)

        const review = await UpdateReview(updateReview)
        console.log(review)
        this.setState({
            review: updateReview,
            created: true
        })
    }
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
                            name="user_name"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Caption:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                            name="caption"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Experience:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                            name="experience"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Trip type:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                            name="trip_type"
                        />
                    </div>
                    <button type="submit">Add Review</button>
                </form>
            </div>
        )
    }
}

export default updateReview
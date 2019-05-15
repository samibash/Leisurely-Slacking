import React, { Component } from 'react';
import { updateReview } from '../../services/Reviews';

class UpdateReview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            review: props.review,
            created: false
        }
    }

    onReviewFormChange = async (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log(value)
            await this.setState(prevState => {
            let newReview = prevState.reviews
            // newReview[name] = value
            console.log('set', newReview)
            console.log(this.state.review)
            // return newReview
        })
    }

    onReviewFormSubmit = async (e) => {
        e.preventDefault()
        console.log(`Review Updated:`, this.state)

        let reviewUpdate = {
            user_name: this.state.user_name,
            caption: this.state.caption,
            experience: this.state.experience,
            trip_type: this.state.trip_type
        }
        console.log(reviewUpdate)
        const review = await updateReview(reviewUpdate)
        console.log(review)
        this.setState({
            review: updateReview,
            created: true
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Review page</h1>
                <form>
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

                    {/* <div>
                        <label htmlFor="name">Trip type:</label>
                        <input 
                            onChange={this.onReviewFormChange}
                            name="trip_type"
                        />
                    </div>  */}
                    <button onClick={this.onReviewFormSubmit} type="submit">Add Review</button>
                </form>
            </div>
        )
    }
}

export default UpdateReview
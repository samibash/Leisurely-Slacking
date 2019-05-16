import React, { Component } from 'react';

class UpdateReview extends Component {
    
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
                </form>
            </div>
        )
    }
}

export default UpdateReview
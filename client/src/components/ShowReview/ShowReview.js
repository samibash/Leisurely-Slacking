import React from 'react';
import './ShowReview.css'

const ShowReview = ({ reviews }) => {

    return (
    <div className="container">
      <div className="section" id="this-thang">
        <div className="row columns">
          <div className="column">
            <div className="card large">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <h2 className="title is-4 no-padding">{reviews.user_name}</h2>
                    <p><span className="subtitle is-6"><strong>Caption: </strong>{reviews.caption}</span></p>
                    <p className="subtitle is-6"><strong>Experience: </strong>{reviews.experience}</p>
                  </div>
                </div>
                <div className="content">
                <strong>Type: </strong>{reviews.trip_type}
                  <div className="background-icon"><span className="icon-twitter" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ShowReview;
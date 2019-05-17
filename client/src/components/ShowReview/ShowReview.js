import React from 'react';
import { deleteReview } from '../../services/Reviews'
import './ShowReview.css'

const ShowReview = ({ reviews }) => {
  
  const onReviewDelete = async (reviews) => {
    console.log(reviews.id)
    await deleteReview(reviews.id, reviews)
    document.location.reload();
  }

  return (
    <div className="container">
      <div className="section">
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
                  <button onClick={() => onReviewDelete(reviews)}>DELETE</button>
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
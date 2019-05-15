import React from 'react';

const ShowReview = ({ reviews }) => {

    return (
      <div>
        <h2>{reviews.user_name}</h2>
        <li>{reviews.caption}</li>
        <li>{reviews.experience}</li>
        <li>{reviews.trip_type}</li>
      </div>
    );
}

export default ShowReview;
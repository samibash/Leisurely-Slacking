import React from 'react';
import { deleteReview } from '../../services/Reviews'

const ShowReview = ({ reviews }) => {

  const onReviewDelete = async (reviews) => {
    console.log(reviews.id)
    await deleteReview(reviews.id, reviews)
    document.location.reload();
  }

  return (
    <div>
      <h2>{reviews.user_name}</h2>
      <li>{reviews.caption}</li>
      <li>{reviews.experience}</li>
      <li>{reviews.trip_type}</li>
      <button onClick={() => onReviewDelete(reviews)}>DELETE</button>
    </div>
  );
}

export default ShowReview;
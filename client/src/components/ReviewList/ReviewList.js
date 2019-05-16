import React from 'react';
import ShowReview from '../ShowReview/ShowReview';

const ReviewList = ({ reviews }) => {
    const reviewData = reviews && reviews[0]
    ? reviews.map((reviews, index) => {
        return <ShowReview key={ index } reviews={ reviews }/>}) : null

    return (
        <div>
            <updateReview review={reviews}/>
            <h1>{reviewData}</h1>
        </div>
    )
}

export default ReviewList
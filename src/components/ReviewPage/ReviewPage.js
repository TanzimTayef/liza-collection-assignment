import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const ReviewPage = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="Reviews">
               {
                  reviews.map(review => <Review id={review._id} review={review}></Review>)
                }
            </div>
    );
};

export default ReviewPage;
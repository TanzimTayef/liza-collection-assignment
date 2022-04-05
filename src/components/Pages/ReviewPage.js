import useProducts from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useProducts();
    const showReviewsHandler = () => {
      
       console.log( reviews.length)
    }

    return (
        <div>
             <div className="Reviews">
               {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
                {
                    console.log(reviews)
                }
            </div>
        </div>

   

    );
};

export default Reviews;
import useProducts from '../../hooks/useReviews';
import Review from '../Review/Review';
import './ReviewsPage.css'

const Reviews = () => {
    const [reviews, setReviews] = useProducts();
  

    return (
        <div className='reviews-page'>
            <h1>What our customers say!!</h1>
        <div>
             <div className="Reviews">
               {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            </div>
            </div>

   

    );
};

export default Reviews;
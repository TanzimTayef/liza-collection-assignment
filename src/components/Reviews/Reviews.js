import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useReviews';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useProducts();
    return (
        <div className='Reviews-container'>
              <h2>Our Customer(3)</h2>
            <div className="Reviews">
             
               {
                  reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            <div className='button'>
                <Link to="/reviewsPage" className="btn">See All Reviews</Link>
            </div>
        </div>

    );
};

export default Reviews;
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useReviews';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useProducts();
    return (
        <div>
             <div className="Reviews">
               {
                  reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                }
                {
                    console.log(reviews)
                }
            </div>
            <div className='button'>
                <Link to="/reviewsPage" className="btn">Expolre Now</Link>
            </div>
        </div>

    );
};

export default Reviews;
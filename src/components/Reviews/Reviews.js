import React from 'react';
import useProducts from '../../hooks/useReviews';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useProducts();

    return (
        <div>
             <div className="Reviews">
               {
                  reviews.map(review => <Review id={review._id} review={review}></Review>)
                }
            </div>
           <div className='button'> <a href="/src/components/ReviewPage/ReviewPage.js" className="btn">Expolre Now</a></div>
        </div>
        









    //     <div className='mb-16'>
    //         <h1 className='text-5xl text-center'>Our Customer Reviews</h1>
    //     <div className="flex md:flex-row flex-col justify-between py-8">
    //         {
    //             reviews.map(review => <Review id={review._id} review={review}></Review>)
    //         }
    //     </div>
    //         <a className='' href='/reviews'>
    //         <button className='center'>See All The reviews</button>
    //    </a>
    //    </div>

    );
};

export default Reviews;
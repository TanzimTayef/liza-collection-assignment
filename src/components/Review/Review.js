import React from 'react';
import "./Review.css"

const Review = (props) => {
    const {name, images, rating , desc} = props.review
    
    return (
        <div className="review">
        <i className="fa fa-quote-left"></i>
            <p>{desc}</p>
        <div className="rating">
          {rating}
        </div>
        <img src="" alt="" />
       <h3>{name}</h3>
    </div>





    //     <div className="flex flex-row justify-center pt-4">
    //     <div className="h-20 w-20 p-6 rounded-full">
    //      <img src={images} alt="" />
    //     </div>
    //     <div className="flex flex-col my-auto justify-start">
    //         <p className="">
    //           Name: {name}
    //         </p>
    //         <p className="text-sm">
    //          {desc}
    //         </p>
    //         <p className="text-sm">
    //          {rating}
    //         </p>
    //     </div>
    // </div>
    );
};

export default Review;
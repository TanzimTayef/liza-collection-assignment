import React from 'react';
import dressImg from "../../images/dress.jpg"

const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between py-24">
        <div className="flex flex-col my-auto">
            <h1 className="lg:text-6xl font-bold pt-6 md:text-6xl text-4xl">
               Find Your Choosing Dress</h1>
            <h1 className="lg:text-6xl font-bold pt-4 md:text-6xl text-4xl">
                Get Latest Dress</h1>
            <p className="pt-8 md:w-1/2 opacity-70">
            Latest collection. You will get high quality dresses on this site. So find you choosing a dress and order now. This is the number one site for women's clothes. Let’s now connect with us.
            </p>
        </div>
        <div className="">
          <img src={dressImg} alt="" /> 
        </div>
    </div>

    );
};

export default Home;
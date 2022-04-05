import React from 'react';
import dressImg from "../../images/dress.png"
import "./Header.css"

const Header = () => {
    return (
         <div className="home">
         <div className="home-colum">
             <h1>Find Your Best Choose</h1>   
             <h1> Get Latest Dress </h1>   
             <p> Latest collection. You will get high quality dresses on this site. So find you choosing a dress and order now. This is the number one site for women's clothes. Let’s now connect with us.</p>
             <a href="/home" className="btn">Expolre Now</a>
         </div>
        <div className="home-colum">
          <div className='img'><img src={dressImg} alt="img" /></div>
        </div>
            </div>
    );
};

export default Header;
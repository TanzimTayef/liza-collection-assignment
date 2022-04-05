import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className='answer-container'>
            <div className='answer'>
                <h1>1. What is context api?</h1>  
                <p>Context api is a react structure. Which can solve the props drilling issue.
                When we want to pass data in the nested component. We do it by drilling. This is provlemital. So react can easily solve this issue by context api. First  declare a context to pass in any components. Then wrap parent components  by provider. 
                </p>
            </div>
            <div className='answer'>
                <h1>2. What is the semantic tag?</h1>  
                <p>Semantic is the main structure in a html tag. They specify the content. Browsers can easily identify a website section.  Semantic tags can make it easier to read and understand that code. </p>
            </div>
            <div className='answer'>
                <h1>3. What is the difference between inline , inline block and block?</h1>  
                <p>An inline element no line break before and after. inline element stay one by one.</p>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className='answer-container'>
            <div className='answer'>
                <h1>1. What is context api?</h1>  
                <p>Context api is a react structure. Which can solve the props drilling issue.
                When we want to pass data in the nested component. We do it by drilling. This is problematical. So react can easily solve this issue by context api. First  declare a context to pass in any components. Then wrap parent components  by provider.</p>
            </div>
            <div className='answer'>
                <h1>2. What is the semantic tag?</h1>  
                <p>Semantic is the main structure in a html tag. They specify the content. Browsers can easily identify a website section.  Semantic tags can make it easier to read and understand that code. semantic elements  can be used to define different parts of a website.</p>
            </div>
            <div className='answer'>
                <h1>3. What is the difference between inline , inline block and block?</h1>  
                <p>An inline element no line break before and after. inline elements stay one by one. This element doesn't make a new line. They are not working height width.
                Inline block elements can contain height and width and also it does not make a new line. Block element contains everything and it makes a new line.</p>
            </div>
        </div>
    );
};

export default Blogs;
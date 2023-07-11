import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className='blog-header'>Blog</h2>
            <div className='blog-content'>
                <h3>When should you use context API?</h3>
                <p>- The Context API in React is used to manage global state in an application. It allows you to pass data through the component tree without having to pass props down manually at every level. You can use the Context API when you have data or state that needs to be accessed by multiple components at different levels of the component tree.</p>
                <h3>What is a custom hook?</h3>
                <p>- A custom hook is a reusable function in React that lets you extract and reuse logic from components. It allows you to abstract away complex logic from your components and manage it in a separate place.</p>
                <h3>What is useRef?</h3>
                <p>- useRef is a built-in hook in React that returns a mutable object whose current property can be used to store and persist a value across re-renders. It allows you to access and modify the properties of a DOM element directly without having to go through the React state update process.</p>
                <h3>What is useMemo?</h3>
                <p>- useMemo is a built-in hook in React that memoizes the result of a function so that it can be cached and reused. It takes two arguments: a function that returns a value, and an array of dependencies that are used to determine whether to recompute the value.</p>
            </div>
        </div>
    );
};

export default Blog;
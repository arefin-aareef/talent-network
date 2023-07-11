import React from 'react';
import './JobCategory.css'

const JobCategory = ({jobCategory}) => {

    const {name, logo, availability} = jobCategory;

    return (
        <div className='category-container'>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default JobCategory;
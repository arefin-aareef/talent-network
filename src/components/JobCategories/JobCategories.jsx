import React from 'react';
import './JobCategories.css'
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';


const JobCategories = () => {

    const jobCategories = useLoaderData()

    return (
        <div className='job-categories'>
            <h1 className='category-header'>Job Category List</h1>
            <p className='category-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='categories-container'>
                {
                    jobCategories.map(jobCategory => <JobCategory
                    key={jobCategory.id}
                    jobCategory={jobCategory}
                    ></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;
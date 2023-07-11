import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './FeaturedJobs.css'

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([])
    const [allJobs, setAllJobs] = useState([])
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        fetch('featuredJobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    }, []);
    
    const handleAllJobs  = () => {
        setAllJobs(featuredJobs);
        setShowButton(false);

    }

    return (
        <div className='featured-container'>
            <h1 className='featured-header'>Featured Jobs</h1>
            <p className='featured-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='featured-jobs'>
                {
                    featuredJobs.map(featuredJob => <FeaturedJob
                    key={featuredJob.id}
                    featuredJob={featuredJob}
                    ></FeaturedJob>).slice(0, 4)
                }
                {
                    allJobs.map(featuredJob => <FeaturedJob
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                        ></FeaturedJob>).slice(4, 6)
                }
            </div>
            {showButton && <button onClick={handleAllJobs} className='all-jobs-btn'>See All Jobs</button>}
        </div>
    );
};

export default FeaturedJobs;
import React from 'react';
import bannerImg from '../../assets/images/P3OLGJ1 copy 1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <h1>One Step <br /> Closer To Your <span className='job-color'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <img src={bannerImg} alt="" />
            
        </div>
    );
};

export default Banner;
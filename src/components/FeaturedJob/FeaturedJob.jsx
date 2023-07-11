import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedJob.css'

const FeaturedJob = ({featuredJob}) => {
    const {id, company_logo, job_title, company_name, employment_status, employment_contract, location_icon, location, dollar_icon, salary} = featuredJob;
    return (
        <div className='featured-job'>
            <img className='company-logo' src={company_logo} alt="" />
            <h3>{job_title}</h3>
            <p className='company-name'>{company_name}</p>
            <div className='employment-detail'>
                <p>{employment_status}</p>
                <p>{employment_contract}</p>
            </div>
            <div className='salary-container'>
                <img src={location_icon} alt="" />
                <p>{location}</p>
                <img src={dollar_icon} alt="" />
                <p>{salary}</p>
            </div>
            <Link 
                to={`/details/${id}`}
            >
                <button className='view-details-btn'>View Details</button>
            </Link>
            
        </div>
    );
};

export default FeaturedJob;
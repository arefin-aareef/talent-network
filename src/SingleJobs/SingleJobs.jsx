import React from 'react';
import './SingleJobs.css'

const SingleJobs = ({aj}) => {

    const {company_logo, company_name, employment_status, employment_contract,  dollar_icon, salary, location,  job_title, location_icon} = aj;

    return (
        <div className='single-job'>
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
            </div>

            
        </div>
    );
};

export default SingleJobs;
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../Utility/fakedb';
import './JobDetails.css'

const JobDetails = () => {

    const details = useLoaderData();
    const paramsId = useParams();
    const newId = parseInt(paramsId.detailsId);

    const [jobDetails, setJobDetails] = useState([])

    useEffect(() => {
    const findData = details.find(dt => (dt.id === newId));
    setJobDetails(findData);
    }, []);

    const handleApplyNow = (id) => {
        details.find(an => an.id === id)
        addToDb(id)
    }

    const {id, job_description, job_responsibilities, educational_requirements, experiences, dollar_icon, salary, title_icon, job_title, phone_icon, email_icon, location_icon, phone, email, address} = jobDetails;

    return (
        <div className='details-container'>
            <div>
                <p className='utility'>Job Description: </p>
                <p className='utility-2'>{job_description}</p>
                <p className='utility'>Job Responsibilities: </p>
                <p className='utility-2'>{job_responsibilities}</p>
                <p className='utility'>Educational Requirements: </p>
                <p className='utility-2'>{educational_requirements}</p>
                <p className='utility'>Experiences: </p>
                <p className='utility-2'>{experiences}</p>
            </div>
            <div>
                <div className='right-container'>
                    <h3>Job Details</h3>
                    <hr />
                    <div className='flex-item'>
                        <img src={dollar_icon} />
                        <p className='utility'>Salary:</p>
                        <p className='utility-2'>{salary}</p>
                    </div>
                    <div className='flex-item'>
                        <img src={title_icon} />
                        <p className='utility'>Job Title:</p>
                        <p className='utility-2'>{job_title}</p>
                    </div>
                    <h3>Contact Information</h3>
                    <hr />
                    <div className='flex-item'>
                        <img src={phone_icon} />
                        <p className='utility'>Phone:</p>
                        <p className='utility-2'>{phone}</p>
                    </div>
                    <div className='flex-item'>
                        <img src={email_icon} />
                        <p className='utility'>Email:</p>
                        <p className='utility-2'>{email}</p>
                    </div>
                    <div className='flex-item'>
                        <img src={location_icon} />
                        <p className='utility'>Address:</p>
                        <p className='utility-2'>{address}</p>
                    </div>
                </div>
                <button onClick={() => handleApplyNow(id)} className='apply-now-btn'><b>Apply Now</b></button>
                
            </div>
        </div>
    );
};

export default JobDetails;
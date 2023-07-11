import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJobs from '../../SingleJobs/SingleJobs';
import { getShoppingCart } from '../Utility/fakedb';
import './Jobs.css'

const Jobs = () => {

    const [applyJob, setApplyJob] = useState([]);
    const data = useLoaderData();

    

    useEffect(() => {
        const jobList = getShoppingCart();
        const newJob = [];
        for ( const id in jobList) {
            const addJob = data.find(dt => dt.id == id);
            if(addJob) {
                const quantity = jobList[id]
                addJob.quantity = quantity
                newJob.push(addJob)
            }
        }
        setApplyJob(newJob)
    } ,[])



    return (
        <div className='applied-jobs'>
            <h2 className='applied-jobs-header'>Applied Jobs</h2>
            <div>
                {
                    applyJob.map(aj => <SingleJobs
                    key={aj.id}
                    aj={aj}
                    ></SingleJobs>)
                }


            </div>
        </div>
    );
};

export default Jobs;
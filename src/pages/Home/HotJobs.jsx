import React, { useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobsPromise }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobsPromise.then(data => {
            setJobs(data);
            console.log(data);
        }).catch(err => console.error('Fetch error:', err));
    }, [jobsPromise]);

    return (
        <div>
            <h2 className='text-2xl text-center my-12'>Hot Jobs of the Day</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;

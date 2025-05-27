import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {

    const {title, company} = useLoaderData();

    return (
        <div>
            <h2 className='text-3xl'>{title}</h2>
            <p>{company}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;
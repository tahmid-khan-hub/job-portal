import React, { Suspense } from 'react';
import useAuth from '../../hooks/UseAuth'
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {

    const {user} = useAuth();

    return (
        <div>
            <h2>My posted jobs </h2>
            <Suspense fallback={`loading`}>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email, user.accessToken)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
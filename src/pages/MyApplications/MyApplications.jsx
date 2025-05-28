import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';


const MyApplications = () => {
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading'}>
                <ApplicationList></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
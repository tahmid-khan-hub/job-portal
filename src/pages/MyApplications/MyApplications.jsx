import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';


const MyApplications = () => {

    const {user} = UseAuth();

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading'}>
                <ApplicationList myApplicationsPromise = {myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
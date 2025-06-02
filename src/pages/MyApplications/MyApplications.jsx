import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';


const MyApplications = () => {

    const {user} = UseAuth();

    // firebase provided us a access token
    console.log('token from firebase', user.accessToken);

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading'}>
                <ApplicationList myApplicationsPromise = {myApplicationsPromise(user.email, user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
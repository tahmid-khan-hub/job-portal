import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import useApplicationApi from '../../api/useApplicationApi';


const MyApplications = () => {

    const {user} = UseAuth();
    const {myApplicationsPromise} = useApplicationApi();

    // firebase provided us a access token
    console.log('token from firebase', user.accessToken);

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
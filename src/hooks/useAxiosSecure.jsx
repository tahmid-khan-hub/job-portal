import axios from 'axios';
import React from 'react';
import UseAuth from './UseAuth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const useAxiosSecure = () => {

    const {user, signOutUser} = UseAuth();

    axiosInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })

    axiosInstance.interceptors.response.use(response =>{
        return response;
    }, error =>{
        if(error.status === 401 || error.status === 403){
            // console.log('logout the user for 401');
            signOutUser()
            .then(() =>{
                console.log('signout user for 401');
            })
            .catch(err =>{
                console.log(err);
            })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;
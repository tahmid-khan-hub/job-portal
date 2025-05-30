import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) =>{

    console.log(app_id);

    axios.patch(`http://localhost:3000/applications/${app_id}`, {status: e.target.value})
    .then(res =>{
        console.log(res);
        if(res.data.modifiedCount){
            alert('status has been updated')
        }
    })
    .catch(err =>{
        console.log(err);
    })
  }

  return (
    <div>
      <h2>
        {applications.length} - {job_id}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                    <option disabled={true}>updated status</option>
                    <option>under review</option>
                    <option>call for interview</option>
                    <option>hired</option>
                    <option>rejected</option>

                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;

import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div>
      <h2>Jobs created by you: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job title</th>
              <th>deadline</th>
              <th>view applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td><Link to={`/applications/${job._id}`}>view applications</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;

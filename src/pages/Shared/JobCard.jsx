import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    description,
    company,
    company_logo,
    requirements,
    salaryRange,
    _id,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="" />
        </figure>
        <div>
            <h3 className="text-2xl">{company}</h3>
            <p>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p className="mb-5">
          {description}
        </p>
        <div className="card-actions ">
            {
                requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
            }
        </div>

        <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`}><button className="btn btn-primary mt-5">Apply Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

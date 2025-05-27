import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = UseAuth();

  console.log(jobId, user);

  const handleApplyFormSubmit = e =>{
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    

  }
  return (
    <div>
      <h2 className="text-3xl text-center my-12">Apply for this job <Link className="text-blue-500" to={`/jobs/${jobId}`}>Details here</Link></h2>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-5">

          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedIn" className="input" placeholder="LinkedIn profile link" />

          <label className="label">Github Link</label>
          <input type="url" name="github" className="input" placeholder="Github Link" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input" placeholder="Resume Link" />

          <button className="btn w-full btn-primary mt-5">Apply</button>
        </fieldset>
        
      </form>
    </div>
  );
};

export default JobApply;

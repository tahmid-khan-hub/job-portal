import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = UseAuth();

  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };


    // axios
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submittedit",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-12">
        Apply for this job{" "}
        <Link className="text-blue-500" to={`/jobs/${jobId}`}>
          Details here
        </Link>
      </h2>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-5">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <button className="btn w-full btn-primary mt-5">Apply</button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

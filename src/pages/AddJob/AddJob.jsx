import React from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = UseAuth();

  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    // console.log(data);

    const { min, max, currency, ...rest } = data;
    rest.salaryRange = { min, max, currency };

    const requirementsString = rest.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());

    rest.requirements = requirementsClean;

    console.log(requirementsClean);

    rest.responsibilites = rest.responsibilites
      .split(",")
      .map((res) => res.trim());

    rest.status = "active";

    console.log(rest);

    // save job to the db
    axios
      .post("http://localhost:3000/jobs", rest)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This Job has been saved and published",
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
      <h2 className="text-2xl text-center my-11">Add a Job</h2>
      <form onSubmit={handleAddJob} className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          {/* <legend className="fieldset-legend">Basic Info</legend> */}

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            name="company"
            placeholder="Company name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            placeholder="Company location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input"
            name="company_logo"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Job type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-site"
              aria-label="On-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Pick a Job category"
            name="category"
            className="category"
          >
            <option disabled={true}>Pick a Job category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input type="date" name="deadline" className="input" />
        </fieldset>

        {/* salary range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Salary Range</legend>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            {/* <legend className="fieldset-legend">Page details</legend> */}

            <label className="label">Minimum salary</label>
            <input
              type="text"
              className="input"
              name="min"
              placeholder="Minimum salary"
            />

            <label className="label">Maximum salary</label>
            <input
              type="text"
              className="input"
              name="max"
              placeholder="Maximum salary"
            />

            <label className="label">Currency</label>
            <select defaultValue="select a currency" className="currency">
              <option disabled={true}>select a currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
          </fieldset>
        </fieldset>

        {/* job description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Job Description</legend>

          <textarea
            className="textarea"
            name="description"
            placeholder="description"
          ></textarea>
        </fieldset>

        {/* job requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Job requirements</legend>

          <textarea
            className="textarea"
            name="requirements"
            placeholder="requirements (separate by comma)"
          ></textarea>
        </fieldset>

        {/* job responsibilites */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Job responsibilites</legend>

          <textarea
            className="textarea"
            name="responsibilites"
            placeholder="responsibilites (separate by comma)"
          ></textarea>
        </fieldset>

        {/* hr info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Hr Info</legend>

          <label className="label">Hr Name</label>
          <input
            type="text"
            className="input"
            name="hr_name"
            placeholder="Hr name"
          />

          <label className="label">Hr Email</label>
          <input
            type="email"
            className="input"
            name="hr_email"
            defaultValue={user.email}
            placeholder="Hr email"
          />
        </fieldset>

        <input type="submit" className="btn btn-primary" value="Add job" />
      </form>
    </div>
  );
};

export default AddJob;

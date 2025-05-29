import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-2xl text-center my-11">Add a Job</h2>
      <form>
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
              aria-label="On-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Job Category</legend>

          <select defaultValue="Pick a Job category" className="category">
            <option disabled={true}>Pick a Job category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input type="date" className="input" />
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
              name="salaryMin"
              placeholder="Minimum salary"
            />

            <label className="label">Maximum salary</label>
            <input
              type="text"
              className="input"
              name="salaryMax"
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

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mb-11">
          <legend className="fieldset-legend">Basic Info</legend>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;

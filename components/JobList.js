import React from 'react'
import JobDetails from './JobDetails';

const JobList = ({ jobs }) => {

  const toggleAccordion = (event) => {
    event.preventDefault();

    let activeElement = event.target.closest("button")
    if (activeElement && activeElement.classList.contains("active")) {
      activeElement.classList.remove("active")
    }
    else if (activeElement) {
      document.querySelectorAll(".job-accordion").forEach(element => {
        element.classList.remove("active")
      });
      activeElement.classList.add("active")
    }
  }

  const weeksDifference = (date) => {
    var diff = (Date.now() - date) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(diff));
  }

  return (
    <div className="jobs">
      {jobs.map((job, index) =>
        <div className="flex flex-col" key={index}>
          <button className="job-accordion accordion flex flex-col md:flex-row mt-4 border-b pb-4 focus:outline-none justify-between " onClick={(event) => toggleAccordion(event)}>
            <div className="flex flex-col text-left">
              <h2>{job.job_title}</h2>
              <div>{job.job_type} | ${job.salary_range.join(" - $")} per hour | {job.city}</div>
            </div>
            <div className="mr-8">{weeksDifference(Date.parse(job.created))} weeks ago</div>
          </button>
          <div className="panel">
            <JobDetails job={job} />
          </div>
        </div>
      )
      }
    </div>
  )
}

export default JobList

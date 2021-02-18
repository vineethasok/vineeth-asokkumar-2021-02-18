import React from 'react'
import JobList from './JobList'

const CompanyList = ({ companies }) => {
  const toggleAccordion = (event) => {
    event.preventDefault();

    let activeElement = event.target.closest("button")
    if (activeElement && activeElement.classList.contains("active")) {
      activeElement.classList.remove("active")
    }
    else if (activeElement) {
      document.querySelectorAll(".company-accordion").forEach(element => {
        element.classList.remove("active")
      });
      activeElement.classList.add("active")
    }
  }

  return (
    <div className="company">
      {companies.map((company, index) =>
        <div className="flex flex-col" key={index}>
          <button className="company-accordion accordion focus:outline-none" onClick={(event) => toggleAccordion(event)}>
            <div className="rounded bg-gray-800 text-white h-8 w-8">{company.name.slice(0, 2)}</div>
            <div className="ml-8 text-left">{company.total_jobs_in_hospital} jobs for {company.name}</div>
          </button>
          <div className="panel">
            <JobList jobs={company.items} />
          </div>
        </div>
      )
      }
    </div>
  )
}

export default CompanyList

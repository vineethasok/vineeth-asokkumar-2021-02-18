import React from 'react'

const CompanyList = ( { companies }) => {
  return (
    <div className="company">
      {companies.map((company, index) =>
        <div className="flex flex-col">
          <div className="rounded bg-gray-800 text-white h-8 w-8">{company.name.slice(0, 2)}</div>
          <div className="ml-8">{company.total_jobs_in_hospital} jobs for {company.name}</div>
        </div>
      )
      }
    </div>
  )
}

export default CompanyList

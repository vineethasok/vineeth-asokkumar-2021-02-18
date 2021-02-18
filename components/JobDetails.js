import React from 'react'

const JobDetails = ({ job }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3 flex flex-wrap">
          <div class="w-full md:w-1/2 font-bold mt-3">Department:</div>
          <div class="w-full md:w-1/2">
            {job.department.join()}
        </div>
        <div class="w-full md:w-1/2 font-bold mt-3">Hours / Shifts:</div>
        <div class="w-full md:w-1/2">
          {job.hours.join(" hours - ")} hours / {job.work_schedule}
        </div>
        <div class="w-full md:w-1/2 font-bold mt-3">Summary:</div>
        <div class="w-full md:w-1/2">
          {job.description}
        </div>

      </div>
      <div className="flex md:flex-col w-full md:w-1/3 mt-4">
        <button className="border border-solid p-2 rounded-md bg-blue-500 text-white md:ml-auto md:mt-auto">Job Details</button>
        <button className="border border-solid p-2 rounded-md text-blue-500 border-blue-500 ml-2 mt-0 md:mt-2 md:ml-auto mb-3 md:mb-8">Save Job</button>

      </div>
    </div>
  )
}

export default JobDetails

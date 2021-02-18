import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import SortElement from '../components/SortElement'
import CompanyList from '../components/CompanyList'
import FilterListElement from '../components/FilterListElement'

let url = process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "https://zen-carson-68103d.netlify.app/api";

const Index = ({ filters }) => {
  const router = useRouter();

  let [searchValue, setSearchValue] = useState(router.query.keyword || '')

  const updateQuery = (value) => {
    setSearchValue(value)
  }

  let sortUrlParams = {}
  let sortOptions = ["location", "job_title", "department", "required_credentials", "experience"]
  let sortOptionsName = ["Location", "Role", "Department", "Education", "Experience"]

  if (router.query.sort) {
    let sort = router.query.sort
    sort.split(",").forEach(element => {
      let [sortKey, sortValue] = element.split(":")
      sortUrlParams[sortKey] = sortValue
    });
  }
  let [sortValues, setSortValues] = useState(sortUrlParams)

  const updateSort = (key, value) => {
    let newValue ={ ...sortValues, [key]: value}
    setSortValues(newValue)
  }

  let [jobs, setJobs] = useState([])

  useEffect(() => {
    let query = []

    let sortQuery = ''
    Object.entries(sortValues).forEach(([key, value]) => {
      if (value) {
        sortQuery += `${key}:${value},`
      }
    })
    if (sortQuery.length) {
      query.push(`sort=${sortQuery.slice(0, -1)}`)
    }

    if (searchValue) {
      query.push(`keyword=${searchValue}`)
    }

    if (query) {
      query = `?${query.join("&")}`
    }

    router.push(`/${query}`, undefined, { shallow: true })
    fetch(`${url}/jobs${query}`)
      .then(response => response.json())
      .then(({ jobs }) => {
        setJobs(jobs)
      });
  }, [sortValues, searchValue])


  const totalPostings = () => {
    let total = 0;
    jobs.forEach(company => total += company.total_jobs_in_hospital)
    return total;
  }

  return (
    <>
      <Head>
        <title>HEALTH EXPLORE - JOBS</title>
      </Head>

      <SearchBar onKeyEnter={updateQuery} value={searchValue} />

      <div className="job-container">
        <div className="filters-container">
          {Object.entries(filters).map(([key, value]) => <FilterListElement items={value} key={key} name={key} />)}
        </div>
        <div className="company-container">
          <div className="flex justify-between">
            <p className="font-bold">{totalPostings()} Job Postings</p>
            <div className="hidden md:flex justify-end">
              {sortOptions.map((sortElement, index) =>
                <SortElement name={sortElement} title={sortOptionsName[index]} value={sortUrlParams[sortElement]} sortFn={updateSort} key={index} />
              )}
            </div>

          </div>
          <CompanyList companies={jobs} />
        </div>
      </div>
    </>
  )
}

Index.getInitialProps = async ({ query }) => {
  const filterResponse = await fetch(`${url}/filters`)
  const filters = await filterResponse.json()
  return { filters: filters }
}

export default Index

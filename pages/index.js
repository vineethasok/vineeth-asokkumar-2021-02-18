import { useState } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import SortElement from '../components/SortElement'

const Index = () => {
  const router = useRouter();

  let [searchValue, setSearchValue] = useState(router.query.keyword || '')

  const updateQuery = (value) => {
    setSearchValue(value)
  }

  let sortUrlParams = {}
  let sortOptions = ["location", "job_title", "department", "required_credentials", "experience"]


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



  const totalPostings = () => {
    return 1;
  }

  return (
    <>
      <Head>
        <title>HEALTH EXPLORE - JOBS</title>
      </Head>

      <SearchBar onKeyEnter={updateQuery} value={searchValue} />

      <div className="flex">
        <div className="filters-container">
          FILTER BOX
        </div>
        <div className="company-container">
          <div className="flex justify-between">
            <p className="font-bold">{totalPostings()} Job Postings</p>
            <div className="hidden md:flex justify-end">
              {sortOptions.map((sortElement, index) => <>
                <SortElement name={sortElement} value={sortUrlParams[sortElement]} sortFn={updateSort} key={index} />
              </>)}
            </div>

          </div>
          CompaniesList
        </div>
      </div>
    </>
  )
}
export default Index

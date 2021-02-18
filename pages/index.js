import { useState } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import SearchBar from '../components/SearchBar'

const Index = () => {
  const router = useRouter();

  let [searchValue, setSearchValue] = useState(router.query.keyword || '')

  const updateQuery = (value) => {
    setSearchValue(value)
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
            <div className="hidden md:block">
              SortElements
            </div>

          </div>
          CompaniesList
        </div>
      </div>
    </>
  )
}
export default Index

import Head from 'next/head'

const Index = () => {
  const totalPostings = () => {
    return 1;
  }
  return (
    <>
      <Head>
        <title>HEALTH EXPLORE - JOBS</title>
      </Head>

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

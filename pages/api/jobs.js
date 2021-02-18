import jobs from '../../data/jobs'

import { orderBy } from 'lodash'

export default async (req, res) => {
  res.statusCode = 200
  let jobsJSON = jobs

  const keyword = (req.query.keyword || '').toLowerCase();
  if (keyword != '') {
    jobsJSON = jobsJSON.filter((job) => {
      if (job.name.toLowerCase().includes(keyword) || job.job_title.toLowerCase().includes(keyword)) {
        return true;
      }
      else {
        let items = job.items.filter((item) => {
          return item.type.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword)
        });
        if (items.length) {
          job.items = items;
          job.total_jobs_in_hospital = items.length;
          return true;
        }
        return false;
      }
    })
  }


  const sort = req.query.sort;
  const sortKeys = [];
  const sortTypes = [];
  if (sort) {
    sort.split(",").forEach(element => {
      let [sortKey, sortValue] = element.split(":")
      sortKeys.push(sortKey)
      sortTypes.push(sortValue)
    });
  }
  if (sortKeys.length && sortKeys.length == sortTypes.length) {
    jobsJSON = orderBy(jobsJSON, sortKeys, sortTypes)
  }
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  res.json({ jobs: jobsJSON })
}

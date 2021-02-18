import React from 'react'
import ShowMoreModal from './ShowMoreModal'

const showModal = (items, name) => {
  if (items.length > 9) {
    return <ShowMoreModal items={items} name={name} />
  }
  return null;
}
const FilterListElement = ({items, name}) => {
  let minifiedList = items;
  if (items.length > 9) {
    minifiedList = items.slice(0, 9)
  }
  return (
    <div className="filters mt-4 border bg-white">
      <h2 className="uppercase font-bold mb-3">{name.toLowerCase().split("_").join(" ")}</h2>
      <div className="flex flex-col">
        {minifiedList.map((item, index) => (
        <a href="#" key={index} className="filter-link">{item.key} <span className="sub">{item.doc_count}</span></a>
        ))}
      </div>
      {showModal(items, name)}
    </div>
  )
}

export default FilterListElement

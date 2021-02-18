import React from 'react'

const SortElement = ({ name, title, value, sortFn}) => {
  let sortClass = "arrow";
  if (value) {
    sortClass += ` ${value}`;
  }
  const sortNow = () => {
    let newValue = null
    if (value === "asc") {
      newValue = "desc"
    }
    else if (value === "desc") {
      newValue = null
    }
    else {
      newValue = "asc"
    }

    sortFn(name, newValue)
  }

  return (
    <div className="cursor-pointer" key={name} onClick={() => sortNow() }>
      {title} <i className={sortClass}></i>
    </div>
  )
}

export default SortElement

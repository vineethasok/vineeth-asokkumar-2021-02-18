import React from 'react'

const ShowMoreModal = ({items, name}) => {
  const toggleModal = () => {
    document.querySelector(".modal").classList.toggle("hidden");
  }

  return (
    <div>
      <button className="text-blue-800" onClick={() => toggleModal()}>Show more</button>

      <div id="myModal" class="modal hidden">
        <div class="modal-content">
          <div className="name flex justify-between border-b border-solid border-gray-500 items-center mb-4">
            <h2>{name}</h2>
            <span class="close" onClick={() => toggleModal()}>&times;</span>
          </div>
          <div className="items grid grid-cols-4 gap-2">
            {items.map((item, index) => (
              <a href="#" key={index} className="filter-link">{item.key} <span className="sub">{item.doc_count}</span></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowMoreModal

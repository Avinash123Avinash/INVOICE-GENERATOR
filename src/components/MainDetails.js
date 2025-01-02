import React from 'react'

const MainDetails = ({name,address}) => {
  return (
    <div>
       <section className="flex flex-col items-end">
          <h2 className="uppercase text-2xl font-bold">{name}</h2>
          <p>{address}</p>
        </section>
    </div>
  )
}

export default MainDetails

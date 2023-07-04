import React from 'react'

const Upcoming = ({thumbnail , title}) => {
  return (
    <div className="upcoming">
      <img src={thumbnail} alt="" />
<h3>{title}</h3>
    </div>
  )
}

export default Upcoming
import React from 'react'

const Upcoming = ({thumbnail , title}) => {
  return (
    <div className="upcoming thelists">
      <img src={thumbnail}  alt="" />
<div className="gameinfo">
<h3>{title}</h3>
</div>
    </div>
  )
}

export default Upcoming
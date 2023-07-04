import React from 'react'

const Popularnow = ({thumbnail , title , prise}) => {
  return (
    <div className="popularnow">
      <img src={thumbnail} alt="" />
<h3>{title}</h3>
<h5>{prise}</h5>
    </div>
  )
}

export default Popularnow
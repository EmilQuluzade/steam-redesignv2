import React from 'react'

const Popularnow = ({thumbnail , title , prise}) => {
  return (
    <div className="popularnow thelists">
      <img src={thumbnail} alt="" />
<div className="gameinfo">
<h3>{title}</h3>
<h5>{prise}</h5>
</div>
    </div>
  )
}

export default Popularnow
import React from 'react'

const Newgamespart = ({thumbnail , title , prise}) => {
  return (
    <div className="newgamespart">
<img src={thumbnail} alt="" />
<h3>{title}</h3>
<h5>{prise}</h5>
    </div>
  )
}

export default Newgamespart
import React from 'react'

const Newgamespart = ({thumbnail , title , prise}) => {
  return (
    <div className="newgamespart thelists">
<img src={thumbnail} alt="" />
<div className="gameinfo">
<h3>{title}</h3>
<h5>{prise}</h5>
</div>
    </div>
  )
}

export default Newgamespart
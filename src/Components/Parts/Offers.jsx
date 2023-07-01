import React from 'react'

const Offers = ({title , thumbnail , prise , short_description}) => {
  return (
    <div className="offers">
        <img src={thumbnail} className='offersimg' alt={title} />
        <h2 className='text-white'>{title}</h2>
<p className='text-white'>{short_description}</p>
        <span className='text-white'>{prise}</span>
    </div>
  )
}

export default Offers

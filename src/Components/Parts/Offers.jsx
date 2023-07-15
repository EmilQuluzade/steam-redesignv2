import React from 'react'

const Offers = ({title , thumbnail , prise , short_description}) => {
  return (
    <div className="offers">
        <div className="offersinner">
        <div className="offersfront">
        <img src={thumbnail} className='offersimg' alt={title} />
        </div>
       <div className="offersback">
       <h2 className='text-white offersheading'>{title}</h2>
<p className='text-white offerspar'>{short_description}</p>
        <span className='text-white offersspan'>{prise}</span>
       </div>
        </div>
    </div>
  )
}

export default Offers

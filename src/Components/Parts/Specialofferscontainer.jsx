import React from 'react'
import Offers from './Offers'
import specialoffers from '../Data/Specialoffers.json'

const Specialofferscontainer = () => {
  return (
    <div className="specialofferscontainer">
      {specialoffers.map((game) => (
        <Offers
          thumbnail={game.thumbnail}
          title={game.title}
          short_description={game.short_description}
          prise={game.prise}
        />
      ))}
    </div>
  )
}

export default Specialofferscontainer
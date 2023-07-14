import React from 'react'
import Newgamespart from './Newgamespart'
import newgames from '../Data/Newgames.json'
import Popularnow from './Popularnow'
import Upcoming from './Upcoming'
import popularnow from '../Data/Popularnow.json'
import upcoming from '../Data/Upcoming.json'

const Threelistscontainer = () => {
  return (
    <div className="threelistscontainer">
<div className="list1">
  <div className="headers">
    <h1>NEW GAMES</h1>
  </div>
{newgames.map((game) => (
  <Newgamespart
  thumbnail={game.thumbnail}
  title={game.title}
  />
))}

</div>
<div className="list2">
<div className="headers">
    <h1>POPULAR NOW</h1>
  </div>
{popularnow.map((game) => (
  <Popularnow
  thumbnail={game.thumbnail}
  title={game.title}
  />
))}

</div>
<div className="list3">
<div className="headers">
    <h1>UPCOMING</h1>
  </div>
{upcoming.map((game) => (
  <Upcoming
  thumbnail={game.thumbnail}
  title={game.title}
  />
))}
</div>
    </div>
  )
}

export default Threelistscontainer
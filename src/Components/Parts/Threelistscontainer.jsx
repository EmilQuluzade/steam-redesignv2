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
{newgames.map((game) => (
  <Newgamespart
  thumbnail={game.thumbnail}
  title={game.title}
  prise={game.prise}
  />
))}

</div>
<div className="list2">
{popularnow.map((game) => (
  <Popularnow
  thumbnail={game.thumbnail}
  title={game.title}
  prise={game.prise}
  />
))}

</div>
<div className="list3">
{upcoming.map((game) => (
  <Upcoming
  thumbnail={game.thumbnail}
  title={game.title}
  prise={game.prise}
  />
))}
</div>
    </div>
  )
}

export default Threelistscontainer
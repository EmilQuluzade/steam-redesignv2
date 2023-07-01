import React from 'react';
import eldenring from '../Images/eldenringposter.png';
import Button from '../Parts/Button';
import Specialofferscontainer from '../Parts/Specialofferscontainer';

const Store = () => {
  return (
    <div className="store">
      <img src={eldenring} className='mainimg bannergame' alt="" />
      <div className="bannergame eldenringinfo">
        <div className="left">
          <div className="eldenring">
            <div className="gamename text-white">ELDEN RING</div>
          <div className="info"> Elden Ring is the latest action role-playing game from <br/> FromSoftware, the creators of Dark Souls and Bloodborne. In this <br/> vast and dangerous world, you must explore, battle, and conquer <br/> in order to become the Elden Lord.

With its challenging combat, <br/> expansive world, and rich lore, Elden Ring is a must-play for fans of <br/> action RPGs. So what are you waiting for? Embark on your journey <br/> TODAY!</div>
          </div>
          <div className="buybtn">
            <Button btnname='BUY NOW'/>
          </div>
        </div>
        <div className="right">
          <img src={eldenring} className='bannergameposter' alt="" />
        </div>
      </div>
      <div className="specialoffers">
        <Specialofferscontainer/>
      </div>
    </div>
  );
};

export default Store;

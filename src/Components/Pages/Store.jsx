import React from 'react';
import eldenring from '../Images/eldenringposter.jpg';
import Button from '../Parts/Button';
import Specialofferscontainer from '../Parts/Specialofferscontainer';
import Threelistscontainer from '../Parts/Threelistscontainer'

const Store = () => {
  return (
    <div className="store">
      <img src={eldenring} className='mainimg bannergame' alt="" />
      <div className="bannergame eldenringinfo">
        <div className="left">
          <div className="eldenring">
            <div className="gamename text-white">BATMAN: ARKHAM KNIGHT</div>
          <div className="info">
            <p>
            Batman: Arkham Knight is the latest action-adventure game from Rocksteady Studios, the creators of the Batman: Arkham series. In this epic conclusion to the Arkham trilogy, you must become the Dark Knight and save Gotham City from Scarecrow and his army of Arkham Knight soldiers. With its stunning visuals, fluid combat, and gripping story, Batman: Arkham Knight is a must-play for fans of the Dark Knight.
            </p>
          </div>
          </div>
          <div className="buybtn">
            <Button btnname='BUY NOW'/>
          </div>
        </div>
        {/* <div className="right">
          <img src={eldenring} className='bannergameposter' alt="" />
        </div> */}
      </div>
      <div className="specialoffers">
        <Specialofferscontainer/>
      </div>
      <div className="threelists">
        <Threelistscontainer/>
      </div>
    </div>
  );
};

export default Store;

import React from 'react'
import { Player } from 'video-react';
import room1 from "../images/details-1.jpeg";

function Video() {
    return (
        <div className="player">
              <Player
          poster={room1}
          key='1'
          controls= 'true'
          width="0"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          
        />

        </div>

        
      
      );
}

export default Video
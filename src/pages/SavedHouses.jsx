import React , {useContext } from 'react'
import { RoomContext } from '../context'
import {Link} from "react-router-dom";


function SavedHouses() {
    const {saved} = useContext(RoomContext)
    console.log(saved.length);
    if(saved.length === 0){
      
      return(
        <div key="no-houses" className="no-houses-div">
          <h3>NO HOUSES SAVED YET</h3></div>
        
      )
    }
    else{
      return(
        <div className="saved-rooms-div">
          {  saved.map(save=>(
          <div className="eachroom-saved" key={save.item_id}>
          <Link to={`/rooms/${save.item_id}`}>
            <img
              className="room-img"
              src={save.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{save.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{save.name}</span>
            </div>
          </div>
        </div>
      
          ))}
          
        </div>
       

      )
    }
 
    
   
  
}

export default SavedHouses
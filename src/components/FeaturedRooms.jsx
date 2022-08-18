import React from "react";
// import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import items from '../data'

function FeaturedRooms() {

  const featuredRooms = items.map(
    (item) =>
      item.featured && (
        <div className="each-featured" key={item.item_id}>
          <Link to={`/rooms/${item.item_id}`}> 
          <img src={item.images[0]} alt="uil" />
         
          <div className="about-spans">
            <div>
              <span className="label-for">NAME :</span> <span>{item.name}</span>
            </div>
            <div>
              <span className="label-for">PRICE :</span> <span>{item.price.toLocaleString()}</span>
            </div>
          </div>
          </Link>
         
        </div>
      )
  );
  return <div>
    <div className="featured-text"><h2>FEATURED HOUSES</h2></div>
    <div className="featured-line"></div>
    <div className="featured-rooms"> {featuredRooms}</div>
   
    </div>;
}

export default FeaturedRooms;

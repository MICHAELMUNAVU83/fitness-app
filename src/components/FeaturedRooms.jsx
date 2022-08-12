import React, { useContext } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

function FeaturedRooms() {
  const items = useContext(RoomContext);
  const featuredRooms = items.map(
    (item) =>
      item.fields.featured && (
        <div className="each-featured" key={item.sys.item_id}>
          <Link to={`/rooms/${item.sys.item_id}`}> 
          <img src={item.fields.images[0].fields.file.url} alt="uil" />
         
          <div className="show-more-hover"><h4>SHOW MORE</h4></div>
          <div className="about-spans">
            <div>
              <span className="label-for">PRICE :</span> <span>{item.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span> <span>{item.fields.name}</span>
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

import React, { useContext } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

function FeaturedRooms() {
  const items = useContext(RoomContext);
  const re = items.map(
    (ite) =>
      ite.fields.featured && (
        <div key={ite.sys.item_id}>
       
          <p>{ite.fields.price}</p>
          <img src={ite.fields.images[0].fields.file.url} alt="uil" />
          <Link to={`/rooms/${ite.sys.id}`}>See more </Link>
        </div>
      )
  );
  return <div>{re}</div>;
}

export default FeaturedRooms;

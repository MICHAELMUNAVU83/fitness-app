import React, { useContext } from "react";
import { RoomContext } from "../context";
import { Link, useParams } from "react-router-dom";

const SingleRoom = () => {
  const items = useContext(RoomContext);
  const params = useParams();
  const more = items.map(item =>(
    (item.sys.id === params.id && <div key={item.sys.id}>
      {item.sys.id}
      {item.fields.images.map (image =>(
        <img src={image.fields.file.url} alt="uil" />
        

      ))}
      
            <Link to='/'> HOME </Link>
    </div>)

  ));

  return <div>
    
    {more}
  </div>;
};

export default SingleRoom;

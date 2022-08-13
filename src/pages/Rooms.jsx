import React, { useContext, useState ,useEffect } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

const Rooms = () => {
  const items = useContext(RoomContext);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  if (!items) {
    alert(34);
  }
 
  // useEffect(()=>{
  //   const ma = items.map(item =>{
  //     console.log(item.fields.type)
  //   })
  //   // console.log()
  // },[])
  const rooms = items.map((ite) => {
    if (
      search === String(ite.fields.capacity) &&
      Number(price) >= ite.fields.price
    ) {
      return (
        <div className="eachroom" key={ite.sys.item_id}>
          <Link to={`/rooms/${ite.sys.item_id}`}>
          <img
            className="room-img"
            src={ite.fields.images[0].fields.file.url}
            alt="uil"
          />
          </Link>
          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span> <span>{ite.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span> <span>{ite.fields.name}</span>
            </div>
          </div>
          
       
        </div>
      );
    }
     else if (search === "" || search==="0" || price === "") {
      return (
        <div className="eachroom" key={ite.sys.item_id}>
          <Link to={`/rooms/${ite.sys.item_id}`}>
         
          <img
            className="room-img"
            src={ite.fields.images[0].fields.file.url}
            alt="uil"
          />
          </Link>

          
           <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span> <span>{ite.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span> <span>{ite.fields.name}</span>
            </div>
          
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="filter-rooms-div">
        <input
          type="number"
          max="7"
          step="1"
          placeholder="bedrooms"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <input
          type="number"
          max="500"
          min="0"
          step="50"
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        
      </div>
      <div className="allrooms">{rooms}</div>
    </div>
  );
};

export default Rooms;

import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

const Rooms = () => {
  const items = useContext(RoomContext);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [selected, setSelected] = useState("");

  // useEffect(()=>{
  //   const ma = items.map(item =>{
  //     console.log(item.fields.type)
  //   })
  //   // console.log()
  // },[])
  const rooms = items.map((ite) => {
    if (
      Number(selected) === Number(ite.fields.capacity) &&
      Number(price) >= Number(ite.fields.price)
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
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.fields.name}</span>
            </div>
          </div>
        </div>
      );
    } else if (selected === "" && price === "") {
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
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.fields.name}</span>
            </div>
          </div>
        </div>
      );
    }
    else if (Number(selected) === Number(ite.fields.capacity) && price === ''){
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
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.fields.name}</span>
            </div>
          </div>
        </div>
      );

    }
    else if (selected==='' && Number(price) >= Number(ite.fields.price) ){
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
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.fields.name}</span>
            </div>
          </div>
        </div>
      );

    }
    // else if( Number(selected) === Number(ite.fields.capacity) &&
    // Number(price) < Number(ite.fields.price)){
    //   return(
    //     <div className="none">
    //      no {selected} bedroom house in this price range
    //     </div>
    //   )

    // }
    else if(Number(selected) === Number(ite.fields.capacity) && price ===''){
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
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.fields.price}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.fields.name}</span>
            </div>
          </div>
        </div>
      );
    }
  });
  const selectVal = (e) => {
    setSelected(e.target.value);
  };
  const selectPrice = (e) => {
    console.log(e.target.value);

    setPrice(e.target.value);
  };
  const timo = (
    <div className="filter-rooms-div">
      <div>
        <label for="noOfBedrooms">Choose Number of bedrooms:</label>

        <select class="noOfBedrooms" value={selected} onChange={selectVal}>
          <option value="">ANY NUMBER OF BEDROOMS</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
          <option value="5">5 Bedrooms</option>
          <option value="6">6 Bedrooms</option>
          <option value="7">7 Bedrooms</option>
        </select>
      </div>
      <div>
        <label class="amtOfPrice">Max Price you are willing to spend:</label>

        <select id="amtOfPrice" value={price} onChange={selectPrice}>
          <option value="">ROOMS FOR ALL PRICES </option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
        </select>
      </div>
    </div>
  );

  return (
    <div>
      {timo}

      <div className="allrooms">{rooms}</div>
    </div>
  );
};

export default Rooms;

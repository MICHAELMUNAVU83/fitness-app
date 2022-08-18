import React, {  useState } from "react";


import { Link } from "react-router-dom";
import items from '../data'

const Rooms = () => {
  
  const [price, setPrice] = useState("");
  const [selected, setSelected] = useState("");
  const [where , setWhere]= useState("");

  // useEffect(()=>{
  //   const ma = items.map(item =>{
  //     console.log(item.fields.type)
  //   })
  //   // console.log()
  // },[])
  const rooms = items.map((ite) => {
    if (
      Number(selected) === Number(ite.capacity) &&
      Number(price) >= Number(ite.price) && where=== (ite.location)
    ) {
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>
          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
            </div>
          </div>
        </div>
      );
    } else if (selected === "" && price === "" && where === "") {
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[2]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
            </div>
          </div>
        </div>
      );
    }
    else if (Number(selected) === Number(ite.capacity) && price === '' && where===''){
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
            </div>
          </div>
        </div>
      );

    }
    else if (selected==='' && Number(price) >= Number(ite.price) && where==='' ){
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
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
    else if(Number(selected) === Number(ite.capacity) && price ==='' && where===''){
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
            </div>
          </div>
        </div>
      );
    }
    else if(Number(selected) === Number(ite.capacity) && price ==='' && where===ite.location){
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
            </div>
          </div>
        </div>
      );
    }
    else if(Number(selected) === Number(ite.capacity) && Number(price) >= Number(ite.price) && where===''){
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
            </div>
          </div>
        </div>
      );
    }
    else if(selected === ''  && Number(price) >= Number(ite.price) && where===ite.location){
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
            </div>
          </div>
        </div>
      );
    }
    else if(selected ==='' && price ==='' && where===ite.location){
      return (
        <div className="eachroom" key={ite.item_id}>
          <Link to={`/rooms/${ite.item_id}`}>
            <img
              className="room-img"
              src={ite.images[0]}
              alt="uil"
            />
          </Link>

          <div className="room-spans">
            <div>
              <span className="label-for">PRICE :</span>{" "}
              <span>{ite.price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label-for">NAME :</span>{" "}
              <span>{ite.name}</span>
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
  
    setPrice(e.target.value);
  };
  const selectLocation=(e)=>{
    console.log(e.target.value);
    setWhere(e.target.value)
  }
  const timo = (
    <div className="filter-rooms-div">
      <div>
        <label >Choose Number of bedrooms:</label>

        <select className="noOfBedrooms" value={selected} onChange={selectVal}>
          <option value="">ANY NUMBER OF BEDROOMS</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
          <option value="5">5 Bedrooms</option>
        </select>
      </div>
      <div>
        <label>Max Rent Per Month:</label>

        <select id="amtOfPrice" value={price} onChange={selectPrice}>
          <option value="">ANY PRICE </option>
          <option value="15000">15,000 sh Per month</option>
          <option value="20000">20,000 sh Per month</option>
          <option value="25000">25,000 sh Per month </option>
          <option value="30000">30,000 sh Per month </option>
          <option value="35000">35,000 sh Per month </option>
          <option value="40000">40,000 sh Per month </option>
          <option value="45000">45,000 sh Per month </option>
          <option value="50000">50,000 sh Per month </option>
        </select>
      </div>
      <div>
        <label>Location:</label>

        <select id="amtLocation" value={where} onChange={selectLocation}>
          <option value="">ALL LOCATIONS </option>
          <option value="Lavington">Lavington</option>
          <option value="Kileleshwa">KIleleshwa</option>
          <option value="Kilimani">Kilimani</option>
         
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

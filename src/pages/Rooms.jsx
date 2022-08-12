import React ,{useContext, useState} from 'react'
import { RoomContext } from '../context'
import { Link } from 'react-router-dom'


const Rooms = () => {
  const items = useContext(RoomContext)
  const [search, setSearch]= useState('')
  const [price, setPrice]=useState('')
  if(!items){
    alert(34)
  }
  const rooms = items.map(
    (ite) =>{
      if(search === String(ite.fields.capacity) && Number(price) >= ite.fields.price ){
        return(
          <div className="eachroom" key={ite.sys.item_id}>
          <p>{ite.fields.name}</p>
            <img className="room-img" src={ite.fields.images[0].fields.file.url} alt="uil" />
            <Link  to={`/rooms/${ite.sys.item_id}`}>See more </Link>
          </div>

        )
      }
      else if(search === '' || price==='' ){
        return(
          <div className="eachroom" key={ite.sys.item_id}>
     <p>{ite.fields.name}</p>
      <img className="room-img" src={ite.fields.images[0].fields.file.url} alt="uil" />
      <Link to={`/rooms/${ite.sys.item_id}`}>See more </Link>
     </div>        
        )
      } 
      
    }
   
  );

 
  return (
    <div>
      <div>
        <input type="number" max="7"  step="1" placeholder="bedrooms" onChange={(e)=>{
           setSearch(e.target.value)
        }} value={search} />
         <input type="number" max="500" min="0" step="50" placeholder="price" onChange={(e)=>{
           setPrice(e.target.value)
        }} value={price} />
        <button >SEARCH</button>
      </div>
      {rooms}

    </div>
  )
}

export default Rooms
import React , {useContext} from 'react'
import { RoomContext } from '../context'


function SavedHouses() {
    const items = useContext(RoomContext)
    const saved = items.map(item =>(
        (item.saved && <div>
            {item.fields.name}
        </div>)
    ))
    console.log(items);
  return (
    <div>
        
        {saved}</div>
  )
}

export default SavedHouses
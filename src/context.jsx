import React,{createContext} from 'react'
import items from './data'
export const RoomContext = createContext()

 
export function RoomProvider ({children}){

    return(
        <RoomContext.Provider value={items}>
            {children}

        </RoomContext.Provider>
    )
}
export const RoomConsumer = RoomContext.Consumer
import React,{createContext} from 'react'
import items from './data'
export const RoomContext = createContext()

 
export function RoomProvider ({children}){
//    const  state=[{
//         name :"michael",
//         gender :"male",
//         id:1
//     },
//     {
//         name :"mary",
//         gender :"girl",
//         id:2
//     }
// ]
    return(
        <RoomContext.Provider value={items}>
            {children}

        </RoomContext.Provider>
    )
}
export const RoomConsumer = RoomContext.Consumer
import { Children, createContext, useState } from "react";

export const Context = createContext()

export const UserContext = ({children}) => {
    const [users, setUsers] = useState([])
    return (
        <Context.Provider value={{users, setUsers}}>{children}</Context.Provider>
    )
}
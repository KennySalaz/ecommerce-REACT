import { useReducer , createContext , useContext} from "react";

export const CrearContext = createContext()



export const StateProvider = ({reducer , initialState , children}) => (
    <CrearContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </CrearContext.Provider>
    )

export const UsarContext = () => useContext(CrearContext)
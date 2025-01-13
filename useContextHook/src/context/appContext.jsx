/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"
export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContext = ({children}) => {
    const user = {
        name : 'tajamul',
        number : 1234567890,
    }
    
  return (
    <div>
        <GlobalContext.Provider value={user}>
            {children}
        </GlobalContext.Provider>

        
    </div>
  )
}

export default AppContext
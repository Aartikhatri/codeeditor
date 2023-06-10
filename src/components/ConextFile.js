import React, { useState } from 'react'
import { createContext } from 'react'

export  const DataProvider = createContext()

const ContextFile = ({children}) => {
  const [html , setHtml ] = useState();
  const [js , setJs] = useState("");
  const [css , setCss ] = useState("")

  return (
       <DataProvider.Provider value={{
        html , setHtml , js , setJs , css , setCss
       }}>

        {children}
       </DataProvider.Provider> 
  )
}

export default ContextFile 

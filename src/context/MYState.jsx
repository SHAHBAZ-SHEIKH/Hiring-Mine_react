import myContext from "../context/mycontetx";
import React,{useState} from 'react'

const MYState = ({children}) => {

    const [mode, setMode] = useState('light')

    
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'rgb(17,24,39)'
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
        }


    }


  return (
    <myContext.Provider value={{mode,toggleMode}}>
      {children}
    </myContext.Provider>
  )
}

export default MYState

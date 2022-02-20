import React, { useState } from 'react'

const App = () => {

    let date = new Date().toLocaleTimeString()
   

const [time , setTime] = useState(date)
 

let getPcTime = () => {
    
//    let newVar = date ;
//     setTime(newVar)
//     console.log(newVar);


    date = new Date().toLocaleTimeString()
    setTime(date)

}
return (


    <>

      <h1> {time} </h1>

      <button onClick={getPcTime} > get time </button>
      

    </>
  )
}

export default App

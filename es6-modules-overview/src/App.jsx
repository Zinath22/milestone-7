

import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react'

function App() {
  const [ watches, setwatches] = useState([])
  useEffect( ()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setwatches(data));
  }, [])
  // const watches =
  // [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 6",
  //     "price": "$399"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Samsung Galaxy Watch 4",
  //     "price": "$249"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Fitbit Versa 3",
  //     "price": "$229"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Garmin Forerunner 945",
  //     "price": "$599"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Fossil Gen 5 Carlyle",
  //     "price": "$295"
  //   }
  // ]

  return (
    <>
      
      <h1>Vite + React</h1>
      {
                watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
            }
     
    </>
  )
}

export default App

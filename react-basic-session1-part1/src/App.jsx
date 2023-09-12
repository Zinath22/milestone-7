
import './App.css'
import Card from './components/Card/Card'

 

function App() {


  return (
    <>
     <h1 className='text-4xl text-center mb-5 '>Welcome to my card</h1>
     <div className='grid grid-cols-3 gap-4 px-12'>
     <Card></Card>
      <Card></Card>
      <Card></Card>
     </div>
    
    </>
  )
}

export default App

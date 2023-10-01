import { useContext, createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import './App.css'

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{
        count:count,
        setCount:setCount
      }}>
      <Card sx={{ width: 500, padding:20}}>
        Counter
        <div style={{marginTop:"20px"}}>
        <Buttons count={count} setCount={setCount}/>
        <CountComponent count={count}/>
        </div>
      </Card>
      </CountContext.Provider>
    </>
  )
}

function Buttons() {
  return <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <Increase/>
      <Decrease/>
    </div>
  </>
}

function Increase() {
  const {count, setCount} = useContext(CountContext)
  return <>
    <div >
      <Button variant="contained" onClick={() => {setCount(count+1)}}>Increase Count</Button>
    </div>
  </>
}

function Decrease() {
  const {count,setCount} = useContext(CountContext)
  return <div>
    <Button variant="contained" onClick={() => {setCount(count-1)}}>Decrease Count</Button>
  </div>
}

function CountComponent() {
  const {count} = useContext(CountContext)
  return <>
    {count}
  </>
}

export default App
import { useContext, createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css'
import {useRecoilValue, useSetRecoilState, RecoilRoot, atom} from 'recoil';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
      <Card sx={{ width: 500, padding:20}}>
        Counter
        <div style={{marginTop:"20px"}}>
        <Buttons count={count} setCount={setCount}/>
        <CountComponent count={count}/>
        </div>
      </Card>
      </RecoilRoot>
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
  const setCount = useSetRecoilState(countState)
  return <>
    <div >
      <Button variant="contained" onClick={() => {setCount(existingCount => existingCount+1)}}>Increase Count</Button>
    </div>
  </>
}

function Decrease() {
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant="contained" onClick={() => {setCount(existingCount => existingCount-1)}}>Decrease Count</Button>
  </div>
}

function CountComponent() {
  const count = useRecoilValue(countState)
  return <>
    <Typography variant="h5" component="h2">
    {count}
    </Typography>
  </>
}

const countState = atom({
  key:'countState',
  default:0
})

export default App
import './App.css'
import { useState } from 'react'
import FeedBackAdd from './FeedBackAdd'
import FeedBackList from './FeedBackList'
function App(){
    const [comms, setComms] = useState([])

    const AddComm = (newComm) => {
    if (newComm.input.trim() === '') return
    setComms([...comms, { ...newComm}]) 
    }
    return(
        <div style={{width: '500px', boxShadow: '5px 0 50px 10px black', margin: '20px 0 0 20px', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems:'center' }}>
            <FeedBackAdd AddComm={AddComm}/>
            {comms.length === 0 && 
            (<h3 style={{ color: 'gray', fontWeight: 'normal' }}>Add some comms</h3>)
            }
            <FeedBackList comms={comms}/>
        </div>
    )
}
export default App
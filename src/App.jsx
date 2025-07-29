import { useEffect, useState } from 'react'
import './App.css'
import MainPage from './MainPage'
import AddTaskList from './AddTaskList'
import axios from 'axios'

function App() {    
  const [res, setRes] = useState('')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [usna, setUsna] = useState('')
  const [phone, setPhone] = useState('')
  const [psswrd, setPsswrd] = useState('')
  const [npsswrd, setNPsswrd] = useState('')
  const [infos, setInfos] = useState([])
  function sendInfo(){
    if (/\d/.test(name)) {
    setRes('Имя не должно содержать цифры');
    return;
  }
    if (psswrd !== npsswrd) {
    setRes('Пароои не совподают');
    setNPsswrd('')
    return;
  }
  setRes('Данные успешно созранились')
    axios.post('https://68578eda21f5d3463e557cff.mockapi.io/api/project/users',{
      name: name,
      email: email,
      username: usna,
      password: psswrd,
      phone_number: phone,
    })
    axios.get('https://68578eda21f5d3463e557cff.mockapi.io/api/project/users')
      .then((response)=> setInfos(response.data))
}
return (
  <div className='div'>
    <h1>Register New User</h1>
    <input type="text" placeholder="your name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="text" placeholder="username" value={usna} onChange={(e) => setUsna(e.target.value)}/>
    <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    <input type="password" placeholder="password" value={psswrd} onChange={(e) => setPsswrd(e.target.value)}/>
    <input type="password" placeholder="confim password" value={npsswrd} onChange={(e) => setNPsswrd(e.target.value)}/>
    <button onClick={sendInfo}>Send</button>
    <p>{res}</p>
    <div className='div4'>
      {infos.map((info, index)=> (
        <div className='div3'>
          <div key={index} className='div2'>
          <h3>Name:{info.name}</h3>
          <p>E-Mail:{info.email}</p>
          <p>UserName:{info.username}</p>
          <p>PassWord:{info.password}</p>
          <p>PhoneNumber:{info.phone_number}</p>
        </div>
        </div>
      ))}
    </div>
  </div>
)

}

export default App

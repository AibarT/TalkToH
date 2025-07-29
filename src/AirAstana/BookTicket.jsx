// import { useState } from "react"
// import './Style.css'
// import axios from "axios"
// function MainPage() {
//     const [page, setPage]=useState('buy')
//     const [name,setName] = useState('')
//     const [surename,setSurename] = useState('')
//     const [brth, setBrth] = useState('')
//     const [addr, setAddr] = useState('')
//     const [num, setNum] = useState('')
//     const [islog, setISLog] = useState(false)
//     const [ticks, setTicks] = useState([])
//     const [from, setFrom] = useState("");
//     const [to, setTo] = useState("");
//     const [departDate, setDepartDate] = useState("");
//     const [returnDate, setReturnDate] = useState("");
//     const [budget, setBudget] = useState("");
//     const [place, setPlace] = useState("");
//     function Send(){
//         axios.post('https://68578eda21f5d3463e557cff.mockapi.io/api/project/users'),{
//             from: from,
//             to: to,
//             departDate: departDate,
//             returnDate: returnDate,
//             budget: budget,
//             place: place
//         }
//         axios.get('https://68578eda21f5d3463e557cff.mockapi.io/api/project/users')
//         .then((response)=> setTicks(response.data))
//         AddTick(newTick)
//         console.log(newTick);
//         setFrom('');
//         setTo('');
//         setDepartDate('');
//         setReturnDate('');
//         setBudget('');
//         setPlace('');
//     }
    
//     return(
//         <div>
//             <header>
//                 <div className="c1">
//                     <img src="https://assets-eu-01.kc-usercontent.com/d5eab2ce-d0cf-0106-dfb7-ff2154f01a04/2086c70e-4b88-441a-a57d-17254a69150c/Logo.png?fm=webp&q=80&auto=format" alt="Air Astana" />
//                     <div onClick={()=> setPage('buy')}>Купитт</div>
//                     <div onClick={()=> setPage('check')}>Моя бронь</div>
//                     <div onClick={()=> setPage('login')}>{islog ? 'Аккаунт': 'Войти'}</div>
//                 </div>
//             </header>
//             {page === 'login' ?
//             <div>
//                 {!islog ?
//                 <div className="val">
//                     <input className="input" type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)}/>
//                     <input className="input" type="text" placeholder="Фамилия" value={surename} onChange={(e) => setSurename(e.target.value)}/>
//                     <input className="input" type="date" placeholder="День рождение" value={brth} onChange={(e) => setBrth(e.target.value)}/>
//                     <input className="input" type="text" placeholder="Страна" value={addr} onChange={(e) => setAddr(e.target.value)}/>
//                     <input className="input" type="text" placeholder="Номер" value={num} onChange={(e) => setNum(e.target.value)}/> 
//                     <button onClick={()=> setISLog(!islog)}></button>
//                 </div> : 
//                 <div className="val">
//                     <h3 style={{margin:'0px'}}>{name}</h3>
//                     <p>{addr}</p>
//                     <p>{num}</p>
//                 </div>}
                
//             </div> : page === 'buy' ?
//             <div className="book">
//                 <input type="text" placeholder="Откуда" value={from} onChange={(e) => setFrom(e.target.value)} />
//                 <input type="text" placeholder="Куда" value={to} onChange={(e) => setTo(e.target.value)} />
//                 <input type="date" placeholder="Когда" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
//                 <input type="date" placeholder="Обратно" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
//                 <input type="text" placeholder="Бюджет" value={budget} onChange={(e) => setBudget(e.target.value)} />
//                 <input type="text" placeholder="Место" value={place} onChange={(e) => setPlace(e.target.value)} />
//                 <button onClick={Send}></button>
//             </div>: 
//             <div className="check">
//                 {ticks.map((tick,index)=>(
//                 <div>
//                     <div key={index}>
//                         <p>From: {tick.from} To: {tick.to}</p>
//                     </div>
//                 </div>
//             ))}
//             </div>}
//         </div>
//     )
// }
// export default MainPage



// function BookTicket(AddTick){
//     const [from, setFrom] = useState("");
//     const [to, setTo] = useState("");
//     const [departDate, setDepartDate] = useState("");
//     const [returnDate, setReturnDate] = useState("");
//     const [budget, setBudget] = useState("");
//     const [place, setPlace] = useState("");

//     function Send(){
//         const newTick = {
//             from: from,
//             to: to,
//             departDate: departDate,
//             returnDate: returnDate,
//             budget: budget,
//             place: place
//         }
//         AddTick(newTick)
//         console.log(newTick);
//         setFrom('');
//         setTo('');
//         setDepartDate('');
//         setReturnDate('');
//         setBudget('');
//         setPlace('');
//     }
//     return(
//         <div>
//             <input type="text" placeholder="Откуда" value={from} onChange={(e) => setFrom(e.target.value)} />
//             <input type="text" placeholder="Куда" value={to} onChange={(e) => setTo(e.target.value)} />
//             <input type="date" placeholder="Когда" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
//             <input type="date" placeholder="Обратно" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
//             <input type="text" placeholder="Бюджет" value={budget} onChange={(e) => setBudget(e.target.value)} />
//             <input type="text" placeholder="Место" value={place} onChange={(e) => setPlace(e.target.value)} />
//             <button onClick={Send}></button>
//         </div>
//     )
// }

// export default BookTicket




{/* <input type="text" placeholder="Откуда"/>
                <input type="text" placeholder="Куда"/>
                <input type="date" placeholder="Когда"/>
                <input type="date" placeholder="Обратно"/>
                <input type="text" placeholder="Бюджет"/>
                <input type="text" placeholder="Место"/> */}
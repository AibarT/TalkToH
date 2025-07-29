import axios from "axios"
import { useState } from "react";
import Select from 'react-select';
import './Axios.css'
function Axios(){
    const [res, setRes] = useState('')
    const [name,setName] = useState('')
    const [orders,setOrders] = useState('')
    const [tags, setTags] = useState([]);
    const [price, setPrice] = useState('')
    const [addr, setAddr] = useState('')
    const [num, setNum] = useState('')
    function sendInfo(){
        axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/orders',{
            name: name,
            order: orders,
            price: price,
            address: addr,
            phone_number: num,
        }
           )
        .then((res)=> {
            setRes('Заказ жіберілді!', res.data.order)
        })
    }
    const tagOptions = [];
return(
    <div className="div">
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Your order" value={orders} onChange={(e) => setOrders(e.target.value)}/>
        <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <input type="text" placeholder="Address" value={addr} onChange={(e) => setAddr(e.target.value)}/>
        <input type="text" placeholder="Your number" value={num} onChange={(e) => setNum(e.target.value)}/>
        <button onClick={sendInfo}>Send</button>
        <p>{res}</p>
        {/* <Select
        isMulti
        options={tagOptions}
        value={tags}
        onChange={setTags}
        placeholder="Add tags"
        /> */}
    </div>
)
}
export default Axios
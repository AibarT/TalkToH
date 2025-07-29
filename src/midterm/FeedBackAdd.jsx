import { useState } from 'react';
function FeedBackAdd({AddComm}){
    const [input, setInput] = useState('')
    const [textA, setTextA] = useState('')
    const [select, setSelect] = useState('5-wonderful')

    function Send(){
        const newComm = {
            input: input,
            textA: textA,
            select: select
        };
        AddComm(newComm)
        console.log(newComm)
    }
    return(
        <div style={{display: 'flex', flexDirection: 'column', width:'400px', gap:'10px', fontSize:'16px'}}>
            <h1>💬 Student FeedBack App</h1>
            <input type="text" placeholder='Your name' value={input} onChange={(e) => setInput(e.target.value)} style={{padding:'5px', borderRadius:'7px'}}/>
            <textarea placeholder='Your opinion' value={textA} onChange={(e) => setTextA(e.target.value)} style={{padding:'5px', borderRadius:'7px'}}></textarea>
            <label>Mark(1-5)</label>
            <select value={select} onChange={(e) => setSelect(e.target.value)} style={{padding:'5px', borderRadius:'7px'}}>
                <option value="5">5-wonderful</option>
                <option value="4">4-great</option>
                <option value="3">3-not bad</option>
                <option value="2">2-boring</option>
                <option value="1">1-bad</option>
            </select>
            <button onClick={Send} style={{padding:'5px', borderRadius:'7px', fontSize:'17px'}}>Send</button>
        </div>
    )
}

export default FeedBackAdd
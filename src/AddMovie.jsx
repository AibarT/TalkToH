import { useState } from 'react';
import Select from 'react-select';
function AddMovie({AddFilm}){
    const [input, setInput] = useState('')
    const [textA, setTextA] = useState('')
    const [url, setUrl] = useState('')
    const [tags, setTags] = useState([]);
    const [select, setSelect] = useState('Genre')
    const tagOptions = [
{ value: 'action', label: 'Action' },
{ value: 'adventure', label: 'Adventure' },
{ value: 'animation', label: 'Animation' },
{ value: 'biography', label: 'Biography' },
{ value: 'comedy', label: 'Comedy' },
{ value: 'crime', label: 'Crime' },
{ value: 'documentary', label: 'Documentary' },
{ value: 'drama', label: 'Drama' },
{ value: 'family', label: 'Family' },
{ value: 'fantasy', label: 'Fantasy' },
{ value: 'film-noir', label: 'Film-Noir' },
{ value: 'history', label: 'History' },
{ value: 'horror', label: 'Horror' },
{ value: 'music', label: 'Music' },
{ value: 'musical', label: 'Musical' },
{ value: 'mystery', label: 'Mystery' },
{ value: 'romance', label: 'Romance' },
{ value: 'sci-fi', label: 'Sci-Fi' },
{ value: 'sport', label: 'Sport' },
{ value: 'thriller', label: 'Thriller' },
{ value: 'war', label: 'War' },
{ value: 'western', label: 'Western' }
    ];


    function Send(){
        const newFilm = {
            input: input,
            textA: textA,
            url: url,
            select: select,
            tags: tags
        };
        AddFilm(newFilm)
        console.log('App Started')
    }
    return(
        <div style={{display: 'flex', flexDirection: 'column', width:'400px', gap:'10px', fontSize:'16px'}}>
            <h1>Add Movie</h1>
            <input type="text" placeholder='Movies Name' value={input} onChange={(e) => setInput(e.target.value)} style={{padding:'5px', borderRadius:'7px'}}/>
            <input type="url" placeholder='Movies Poster(URL)' value={url} onChange={(e) => setUrl(e.target.value)} style={{padding:'5px', borderRadius:'7px'}}/>
            <textarea placeholder='Discription' value={textA} onChange={(e) => setTextA(e.target.value)} style={{padding:'5px', borderRadius:'7px'}}></textarea>
            <Select
            isMulti
            options={tagOptions}
            value={tags}
            onChange={setTags}
            placeholder="Add tags"
            />
            <label>Mark(1-5)</label>
            <select value={select} onChange={(e) => setSelect(e.target.value)} style={{padding:'5px', borderRadius:'7px'}}>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            <button onClick={Send} style={{padding:'5px', borderRadius:'7px', fontSize:'17px'}}>Add</button>
        </div>
    )
}

export default AddMovie
import { useEffect } from "react"
function ShowFilm({films}){
    useEffect(()=>{
    alert('Изменения внесены')
    }, [films])
    return(
        <div style={{ width:'400px', backgroundColor:'rgb(175, 175, 175)', borderRadius:'5px', margin:'23px', paddingLeft:'13px' }}>
            {films.map((film, index) => (
                <div key={index} >
                    <img src={film.url} alt={film.input} style={{maxWidth: '350px', maxHeight: '300px', marginTop: '13px'}}/>
                    <h2>{film.input}</h2>
                    <p>{film.textA}</p>
                    {/* <p>{film.tags[0].label}</p> */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {film.tags.map((tag, i) => (
                            <span key={i} style={{ backgroundColor: '#ddd', padding: '2px 6px', borderRadius: '4px' }}>
                                {tag.label}
                            </span>
                        ))}
                    </div>
                    <p>{film.select}/10</p>
                </div>
            ))}
        </div>
    )
}

export default ShowFilm
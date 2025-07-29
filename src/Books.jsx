function Books(props){
    return (
        <>
        <div className="div"><img src={props.img} alt="" /> <h3>{props.title}</h3> <p>Автор: {props.author}</p> <p>Жыққан жылы: {props.year} </p> </div>
        </>
    )
}
export default Books
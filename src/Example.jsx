function Example(props){
    return(
    <>
      <div className="ss"> <h1>Менің визит картам</h1>
      <div className='div'> <h1>Аты жөні: {props.name}</h1> <p>Мамандығы: {props.job}</p> <p>Қала: {props.city}</p> </div>
      </div>
    </>
    )
}
export default Example
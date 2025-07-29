function FeedBackList({comms}){
    return(
        <div style={{ width:'400px', backgroundColor:'rgb(175, 175, 175)', borderRadius:'5px', margin:'23px', paddingLeft:'13px' }}>
            {comms.map((comm, index) => (
                <div key={index} >
                    <h3>{comm.input}</h3>
                    <p>{comm.textA}</p>
                    <p>{comm.select}</p>
                </div>
            ))}
        </div>
    )
}

export default FeedBackList
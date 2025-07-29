import { useEffect } from "react"

function ShowNotes({ tasks, toggleComplete, deleteTask }) {
    //   useEffect(()=>{
    // alert('Изменения внесены')
    // }, [tasks])
  return (
    <div style={{
      maxWidth: '100%',
      fontFamily: 'sans-serif',
      justifyContent:'center'
    }}>

      <div style={{display:'flex', justifyContent:'space-between'}}><h1>My Notes</h1> <button  style={{width:'48px', height:'48px', margin:'21px 0px', border:'none', padding:'0px', backgroundColor:'white'}}>⨂</button></div>
      
      {tasks.length === 0 && (
        <h3 style={{ color: 'gray', fontWeight: 'normal' }}>Add some tasks</h3>
      )}

      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            textDecoration: task.completed ? 'line-through' : 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{
            display: 'block',
            marginLeft: '20px',
          }}>
            <p>{task.text}</p>
            <p style={{color: "grey", fontSize: '14px'}}>{task.textA}</p>
            {!task.tags.length==0 ? <p style={{backgroundColor: '#007bff', fontSize: 'small', borderRadius: '3px'}}>{task.tags[0].label}</p> : <p></p>}
            
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => toggleComplete(index)}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              {task.completed ? '❌' : '✅'}
            </button>
            <button
              onClick={() => deleteTask(index)}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default ShowNotes
import { useEffect } from "react"

function MainPage({ tasks, toggleComplete, deleteTask }) {
    //   useEffect(()=>{
    // alert('Изменения внесены')
    // }, [tasks])
  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      fontFamily: 'sans-serif',
      boxShadow: '3px'
    }}>
      <h1 style={{ textAlign: 'center' }}>Today</h1>
      
      {tasks.length === 0 && (
        <h3 style={{ color: 'gray', fontWeight: 'normal' }}>Add some tasks</h3>
      )}

      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            width: '400px',
            padding: '10px',
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
            <p style={{color: "grey", fontSize: '14px'}}>{task.project}</p>
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

export default MainPage

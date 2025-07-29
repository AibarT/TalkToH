import { useState } from 'react'
import AddNotes from './AddNotes'
import ShowNotes from './ShowNotes'

function App() {

  const [mainPage, setMainPage] = useState(true)
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    if (newTask.text.trim() === '') return
    setTasks([...tasks, { ...newTask, completed: false }])
    setMainPage(true) 
  }

  const toggleComplete = (index) => {
    const updated = [...tasks]
    updated[index].completed = !updated[index].completed
    setTasks(updated)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

return (
  <div className='div' style={{
    display: 'flex',
    flexDirection: 'column',
    margin:'45px 10px 0px 10px' ,
  }}>
    {!mainPage ? (
      <AddNotes addTask={addTask} />
    ) : (
      <ShowNotes tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    )}
    {mainPage ? 
    <footer
    style={{
    position: mainPage && 'fixed',
    bottom: mainPage && '20px',
    right: mainPage && '20px',}}>
        <button
        onClick={() => setMainPage(!mainPage)}
        style={{
        fontSize: '20px',
        padding:'20px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        borderRadius:'50%'}}>
            ➕
        </button>
        
    </footer> : <footer><button onClick={() => setMainPage(!mainPage)} style={{position:'absolute', top: '31.44px', left:'10px', height:'48px', width:'48px'}}>❌</button></footer>}
  </div>
)

}

export default App
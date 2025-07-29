import { useState } from 'react';
import Select from 'react-select';

function AddNotes({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [textA, setTextA] = useState('')
  const [project, setProject] = useState('');
  const [tags, setTags] = useState([]);
  const [deadline, setDeadline] = useState('');

  const tagOptions = [
    { value: 'urgent', label: 'Urgent' },
    { value: 'asap', label: 'ASAP' },
    { value: 'as it turns out', label: 'As it turns out' },
  ];

  const handleSubmit = () => {
    const newTask = {
      text: taskText,
      textA: textA,
      project: project,
      tags: tags,
      deadline: deadline,
    };

    const existingTasks = JSON.parse(localStorage.getItem('TaskInfo')) || [];
    existingTasks.push(newTask);
    localStorage.setItem('TaskInfo', JSON.stringify(existingTasks));

    const allTasks = JSON.parse(localStorage.getItem('TaskInfo')) || [];
    console.log(allTasks);

    addTask(newTask);
    console.log(newTask)

    setTaskText('');
    setTextA('')
    setProject('Home');
    setTags([]);
    setDeadline('');
  };

  return (
    <div className='div' style={{
      display: 'flex', margin:'100px 0px 0px 0px',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
    }}>
      
      <input
        type="text"
        placeholder="Заголовок"
        value={taskText}
        style={{ padding: '10px', borderRadius: '6px', border:'none', fontSize:'20px' }}
        onChange={(e) => setTaskText(e.target.value)}/>

      <textarea
  value={textA}
  onChange={(e) => setTextA(e.target.value)}
  placeholder="Начните писать"
  style={{
    width: 'calc(100vw - 20px)',           // на всю ширину окна
    height: 'calc(100vh - 240px)',          // на всю высоту окна
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    resize: 'none',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif'
  }}
/>
      <div></div>
      <button 
        onClick={handleSubmit}
        style={{position:'absolute', top: '31.44px', right:'10px', height:'48px', width:'48px'}}
      >
        ✅
      </button>
    </div>
  );
}

export default AddNotes;

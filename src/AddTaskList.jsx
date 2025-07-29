import { useState } from 'react';
import Select from 'react-select';

function AddTaskList({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [project, setProject] = useState('Home');
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
    setProject('Home');
    setTags([]);
    setDeadline('');
  };

  return (
    <div style={{
      width: '400px',
      margin: '30px auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      fontFamily: 'sans-serif'
    }}>
      <label>To-do</label>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc'}}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <label>Project</label>
      <select 
        value={project}  
        style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} 
        onChange={(e) => setProject(e.target.value)}
      >
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="School">School</option>
        <option value="Holiday Plan">Holiday Plan</option>
      </select>

      <label>Tags</label>
      <Select
        isMulti
        options={tagOptions}
        value={tags}
        onChange={setTags}
        placeholder="Add tags"
      />

      <label>Deadline</label>
      <input
        type="date"
        value={deadline}
        style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button 
        onClick={handleSubmit}
        style={{
          padding: '12px',
          borderRadius: '8px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Done
      </button>
    </div>
  );
}

export default AddTaskList;
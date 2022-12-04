import useLocalStorage from '../hooks/useLocalStorage';

function LocalStorage() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObject]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='w-40'>
        <div className='mb-3'>
          <label htmlFor='task' className='form-label'>
            Task
          </label>
          <input
            type='text'
            name='task'
            id='task'
            className='form-control'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>

      <hr />

      {tasks.map((task) => (
        <h2 key={task.date}>{task.task}</h2>
      ))}
    </>
  );
}

export default LocalStorage;

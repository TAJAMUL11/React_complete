import {useState} from 'react';
function Todo () {
    const [tasks, setTasks] = useState(["Brush teeth", "Less Sugar", "More Water to drink"]);
    const [newTask, setNewTasks] = useState('');

    function handleInputTasks (e) {
        setNewTasks(e.target.value)

    }

    function addTask () {
        if(newTask.trim() !== ""){
            setTasks(prevTasks => [...prevTasks, newTask ])
            setNewTasks('')

        }
        
    }
    function deleteTask (index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);


    }
    function moveUpTask (index) {
        if(index > 0){
            const moveTasks = [...tasks];
            [moveTasks[index], moveTasks[index - 1]] =
            [moveTasks[index - 1], moveTasks[index]]
            
            setTasks(moveTasks);
        }

    }
    function moveDownTask (index) {
        if(index < tasks.length - 1){
            const moveTasks = [...tasks];
            [moveTasks[index], moveTasks[index + 1]] =
            [moveTasks[index + 1], moveTasks[index]]
            setTasks(moveTasks);
        }

    }


    return(
    <div className="todo_section">
        <h1>Todo List</h1>
        <div className="list">
            <input type="text" value={newTask} onChange={handleInputTasks} placeholder='Enter a Task'/>
           <button className="add-btn" onClick={addTask}>Add</button>
           <ol>
                {tasks.map((task, index) => 
                    <li key = {index}> 
                           <span className="tasks"> {task}</span>
                           <button className = "btn-delete" onClick={() => deleteTask(index)}>Delete</button>
                           <button className = "move-btn" onClick={() => moveUpTask(index)}>Up</button>
                           <button className = "move-btn" onClick={() => moveDownTask(index)}>Down</button>
                    </li>
            )}
            </ol>
           
        </div>
    </div>
    )

}
export default Todo;
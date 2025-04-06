import React, {useState} from "react";
import { flushSync } from "react-dom";
import '../index.css'
function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }    
    function addTask(){
    }
    function deleteTask(index){
    }
    function moveTaskUp(index){
    }
    return (
        <div className="to-do-list ">
            <h1 className="font-bold text-blue-600" >To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask} >ADD</button>
            </div>
            <ol>
                {tasks.map((task , index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)} >
                        Delete
                    </button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;

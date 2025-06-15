import React, {useState} from "react";
import Header from "./Header";
import TaskCard from "./TaskCard";
import TaskInput from "./TaskInput";
import "./index.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newTime, setNewTime] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() !== "" && newTime !== "") {
            setTasks([
                ...tasks,
                {
                    id: tasks.length + 1,
                    name: newTask,
                    time: newTime,
                },
            ]);
            setNewTask("");
            setNewTime("");
        }
    };

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <Header />
            <TaskInput
                newTask={newTask}
                setNewTask={setNewTask}
                newTime={newTime}
                setNewTime={setNewTime}
                handleAddTask={handleAddTask}
            />
            <ul className="task-list">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} onRemove={handleRemoveTask} />
                ))}
            </ul>
        </div>
    );
}

export default App;

import React from "react";

function TaskCard({task, onRemove}) {
    return (
        <li className="task-item">
            <span className="task-name">{task.name}</span>
            <span className="task-time">{task.time}</span>
            <button className="remove-btn" onClick={() => onRemove(task.id)}>
                Remove Task ❌
            </button>
        </li>
    );
}

export default TaskCard;

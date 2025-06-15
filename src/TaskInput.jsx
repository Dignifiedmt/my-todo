import React, {useRef, useState} from "react";

function TaskInput({newTask, setNewTask, newTime, setNewTime, handleAddTask}) {
    const [timeFocused, setTimeFocused] = useState(false);
    const timeInputRef = useRef(null);

    return (
        <div className="input-row" style={{position: "relative"}}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Please Add new task"
                className="input-field"
                required
            />
            <div style={{position: "relative"}}>
                {!newTime && !timeFocused && <span className="time-placeholder">Select time</span>}
                <input
                    type="time"
                    value={newTime}
                    ref={timeInputRef}
                    onFocus={() => setTimeFocused(true)}
                    onBlur={() => setTimeFocused(false)}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="time-field"
                    required
                    style={{position: "relative", background: "transparent"}}
                />
            </div>
            <button className="add-btn" onClick={handleAddTask}>
                Add Task ➕
            </button>
        </div>
    );
}

export default TaskInput;

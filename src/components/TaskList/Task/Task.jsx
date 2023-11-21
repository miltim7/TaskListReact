import { addTask, deleteTask } from "../../../redux/slices/tasksSlice";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

export default function Task({taskData}) {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const inputRef = useRef(null);

    function handleEdit() {
        const newIsEditMode = !isEditMode;

        setIsEditMode(newIsEditMode);

        if (newIsEditMode) return;

        dispatch(updateTask({
            newTitle: inputRef.current.value,
            id: taskData.id
        }))
    }

    return (
        <div>
            {
                isEditMode ?
                    <input type="text" defaultValue={taskData.title} ref={inputRef}/> :
                    <i>{taskData.title}</i>
            }
            <button onClick={handleEdit}>{isEditMode ? 'Save' : 'Edit'}</button>
            <button onClick={() => dispatch(deleteTask(taskData.id))}>Delete</button>
        </div>
    )
}
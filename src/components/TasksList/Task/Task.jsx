import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../redux/slices/tasksSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

function Task({ taskData }) {
    const dispatch = useDispatch();
    const [isChecked, setChecked] = useState(taskData.isChecked);

    function handleClick() {
        setChecked(!isChecked);
        dispatch(updateTask({
            title: taskData.title,
            id: taskData.id,
            description: taskData.description,
            isChecked: !isChecked,
        }));
    }

    return (
        <div>
            <input onClick={handleClick} type="checkbox" checked={isChecked}/>
            <Link to={`/tasks/${taskData.id}`}>{
                <i>{taskData.title}</i>
            }</Link>
            <Link to={`/tasks/${taskData.id}/edit`}>
                <button type="submit">Edit</button>
            </Link>
            <Link to={'/'}>
                <button type="button" onClick={() => {
                    dispatch(deleteTask(taskData.id));
                }}>Delete</button>
            </Link>
        </div>
    )
}

export default Task;
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../redux/slices/tasksSlice";
import { useState } from "react";

function Task({taskData}) {
    const dispatch = useDispatch();
    const [isChecked, setChecked] = useState(taskData.isChecked);

    function handleClickChecker(e) {
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
            <i>{taskData.title}</i>
            <button>Edit</button>
            <button onClick={() => dispatch(deleteTask(taskData.id))}>Delete</button>
            <input type="checkbox" checked={isChecked} onClick={handleClickChecker}/>
        </div>
    )
}

export default Task;
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../redux/slices/tasksSlice";
import { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditTask from "../../EditTask";
import ViewTask from '../../ViewTask';

function Task({ taskData }) {
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

    const [isEdit, setEdit] = useState(false);
    const [isView, setView] = useState(false);

    function handleEditClick(e) {
        e.preventDefault();
        window.location.href = `/tasks/${taskData.id}/edit`;
        setEdit(true);
    }

    function handleViewClick(e) {
        e.preventDefault();
        window.location.href = `/tasks/${taskData.id}/view`;
        setView(true);
    }

    return (
        <>
            <i onClick={handleViewClick}>{taskData.title}</i>
            <button onClick={handleEditClick} type="submit">Edit</button>
            <button onClick={() => dispatch(deleteTask(taskData.id))}>Delete</button>
            <input type="checkbox" checked={isChecked} onClick={handleClickChecker} />

            {
                isEdit ? <EditTask /> : <></>
            }
            {
                isView ? <ViewTask /> : <></>
            }
        </>
    )
}

export default Task;
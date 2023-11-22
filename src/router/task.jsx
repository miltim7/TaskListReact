import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Task() {
    const { taskId } = useParams();
    const tasks = useSelector(state => state.tasksReducer);
    const selectedTask = tasks.find(task => task.id === taskId);
    if (selectedTask === undefined) {
        return;
    }
    return (
        <>
            <div>Title: {selectedTask.title}</div>
            <div>Description: {selectedTask.description}</div>
        </>
    );
}

export default Task;
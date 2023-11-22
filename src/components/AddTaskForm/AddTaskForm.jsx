import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasksSlice";

function AddTaskForm() {
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        dispatch(addTask({
            title: formData.get('title'),
            id: crypto.randomUUID(),
            description: formData.get('description'),
            isChecked: false,
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title"/><br></br>
            <textarea name="description" cols="30" rows="10" placeholder="Description"></textarea><br></br>
            <button type="submit">Add task</button>
        </form>
    )
}

export default AddTaskForm;
import { updateTask } from "../redux/slices/tasksSlice";
import { useDispatch } from "react-redux";

export default function EditTask({ data }) {
    const dispatch = useDispatch();


    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        dispatch(updateTask({
            title: formData.get('title'),
            id: data.id,
            description: formData.get('description'),
            isChecked: data.isChecked,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" defaultValue={data.title} type="text" placeholder="New Title"/>
            <textarea name="description" defaultValue={data.description} cols="30" rows="10" placeholder="New Description"></textarea>
            <button type="submit">Save Changes</button>
        </form>
    )
}
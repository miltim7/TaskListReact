import { Form, redirect, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateTask } from "../redux/slices/tasksSlice";
import store from "../redux/store";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    updates.id = params.taskId;
    store.dispatch(updateTask(updates));
    return redirect(`/tasks/${params.taskId}`);
}

function EditTask() {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const tasks = useSelector(state => state.tasksReducer);
    const selectedTask = tasks.find(task => task.id === taskId);
    if (selectedTask === undefined) {
        return;
    }
    return (
        <>
            <Form method="post" id="contact-form">
                <input name="title" placeholder="Title" type="text" defaultValue={selectedTask.title} />
                <input name="description" placeholder="Description" type="text" defaultValue={selectedTask.description} />
                <button type="submit">Save</button>
                <button type="button" onClick={() => {
                    navigate(-1);
                }}>Cancel</button>
            </Form>
        </>
    );
}

export default EditTask;
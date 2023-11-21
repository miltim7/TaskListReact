import { Form } from "react-router-dom"
import { redirect } from "react-router-dom"

export async function action() {
    return redirect('/tasks/1/edit');
}

export async function loader() {
    return redirect('');
}

export default function Root() {
    return (
        <div id="sidebar">
            <Form method="post">
                <button type="submit">Add Task</button>   
            </Form>
        </div>
    )
}
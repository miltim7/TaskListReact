import { redirect } from "react-router-dom"

export async function action() {
    return redirect('');
}

export async function loader() {
    return redirect('');
}

export default function ViewTask() {
    return (
        <></>
    )
}
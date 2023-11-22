import { Outlet, useNavigation, } from "react-router-dom";
import TasksList from "../components/TasksList/TasksList";
import AddTaskForm from '../components/AddTaskForm/AddTaskForm'

function Root() {
    const navigation = useNavigation();
    return (
        <>
            <div id="sidebar">
                <AddTaskForm />
                <TasksList />
            </div>
            <div
                id="detail"
                className={navigation.state === "loading" ? "loading" : ""}>
                <Outlet />
            </div>
        </>
    );
}

export default Root;
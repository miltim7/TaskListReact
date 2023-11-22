import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './router/root';
import Task from './router/task';
import EditTask from './router/edit';
import {action as editAction } from './router/edit';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "tasks/:taskId",
				element: <Task />,
			},
			{
				path: "tasks/:taskId/destroy",
				errorElement: <div>Oops! There was an error.</div>,
			},
			{
				path: "tasks/:taskId/edit",
				action: editAction,
				element: <EditTask />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
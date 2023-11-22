import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				errorElement: <div>Oops! There was an error.</div>,
				children: [
					{
						path: "tasks/:taskId",
						element: <Task />,
						loader: taskLoader,
					},
					{
						path: "tasks/:taskId/edit",
						element: <EditTask />,
						loader: taskLoader,
						action: editTaskAction,
					},
					{
						path: "tasks/:taskId/destroy",
					},
				],
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
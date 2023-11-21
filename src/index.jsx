import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/root';
import EditTask from './routes/edit';
import ViewTask from './routes/view';

import { 
	action as rootAction,
	loader as rootLoader,
} from './routes/root';
import { 
	action as editAction,
	loader as editLoader,
} from './routes/edit';
import { 
	action as viewAction,
	loader as viewLoader,
} from './routes/view';
 
import store from './redux/store';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		action: rootAction,
		children: [
			{
				path: 'tasks/:taskId/edit',
				element: <EditTask />,
				action: editAction,
			},
			{
				path: 'tasks/:taskId/view',
				element: <ViewTask />,
				action: viewAction,
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
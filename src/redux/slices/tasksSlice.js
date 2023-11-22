import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: JSON.parse(localStorage.getItem('tasks')) || [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        deleteTask: (state, action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload);
            state.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        updateTask: (state, action) => {
            const { id, title, description, isChecked } = action.payload;
            const taskIndex = state.findIndex(task => task.id === id);
            state[taskIndex].title = title;
            state[taskIndex].description = description;
            state[taskIndex].isChecked = isChecked;
            localStorage.setItem('tasks', JSON.stringify(state));
        },
    }
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
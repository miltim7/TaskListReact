import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: JSON.parse(localStorage.getItem('tasks')) || [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem(JSON.stringify(state));
        },
        deleteTask: (state, action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload);
            state.splice(taskIndex, 1);
            localStorage.setItem(JSON.stringify(state));
        },
        updateTask: (state, action) => {
            const {id, newTitle} = action.payload;
            const taskIndex = state.findIndex(task => task.id === id);
            state[taskIndex].title = newTitle;
            localStorage.setItem(JSON.stringify(state));
        }
    }
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
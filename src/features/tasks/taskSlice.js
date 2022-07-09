import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'task 1',
        description: 'task 1 desc',
        completed: false
    },
    {
        id: '2',
        title: 'task 2',
        description: 'task 2 desc',
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const { addTask } = taskSlice.actions
export default taskSlice.reducer
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
            localStorage.setItem('tasks', JSON.stringify(state)) 
            
        },
        getTasks: (state, action) => {
            state = action.payload
            let data = localStorage.getItem('tasks')
            if (data) {
                state = JSON.parse(data)
            }
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload

            const foundTask = state.find(task => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
});

export const { addTask, deleteTask, editTask, getTasks } = taskSlice.actions
export default taskSlice.reducer
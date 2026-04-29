import { createSlice, nanoid } from '@reduxjs/toolkit'

const tasksSlice = createSlice({

    name: 'tasks',
    initialState: {
        tasks: [],
        filter: 'all',
    },

    reducers: {
        addTask: {
            reducer(state, action) {
                state.tasks.push(action.payload)
            },
            prepare(title, priority) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        priority,
                        completed: false,
                    },
                }
            },
        },
    
        editTask(state, action) {
            const { id, title, priority } = action.payload
            const task = state.tasks.find((t) => t.id === id)
            if (task) {
                task.title = title
                task.priority = priority
            }
        },
    
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload)
        },
    
        toggleTask(state, action) {
            const task = state.tasks.find((t) => t.id === action.payload)
            if (task) task.completed = !task.completed
        },
    
        setFilter(state, action) {
            state.filter = action.payload
        },
    
        deleteAllTasks(state) {
            state.tasks = []
        },
    
    },

})

export const { addTask, editTask, deleteTask, toggleTask, setFilter, deleteAllTasks } = tasksSlice.actions

export const selectTasks = (state) => state.tasks.tasks

export const selectFilter = (state) => state.tasks.filter

export const selectFilteredTasks = (state) => {

    const { tasks, filter } = state.tasks

    if (filter === 'all') 
        return tasks

    return tasks.filter((t) => t.priority === filter)

}

export const selectStats = (state) => {

    const tasks = state.tasks.tasks

    const total = tasks.length

    const completed = tasks.filter((t) => t.completed).length

    const completionRate = total ? Math.round((completed / total) * 100) : 0

    return {
        total,
        completed,
        completionRate,
        high: tasks.filter((t) => t.priority === 'high').length,
        medium: tasks.filter((t) => t.priority === 'medium').length,
        low: tasks.filter((t) => t.priority === 'low').length,
    }

}

export default tasksSlice.reducer
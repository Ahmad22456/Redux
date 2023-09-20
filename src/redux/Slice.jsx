import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },

        editTask: (state, action) => {
            const { id, title, description, isDone } = action.payload;
            const taskToEdit = state.find((task) => task.id === id);
      
            if (taskToEdit) {
              // Update the specific task with the new values
              taskToEdit.title = title;
              taskToEdit.description = description;
              taskToEdit.isDone = isDone;
            }
          }
    }
})

export const {addTask, editTask} = taskSlice.actions

export default taskSlice.reducer
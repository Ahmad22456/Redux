import { configureStore } from "@reduxjs/toolkit"
import taskReducer from './Slice'


const store = configureStore({
    reducer: {
        task: taskReducer
    }
})

export default store
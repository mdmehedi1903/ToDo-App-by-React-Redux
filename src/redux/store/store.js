import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/Counter/counterSlice"; 
import todoReducer from "../state/todo/todoSlice"; 
export default configureStore({
    reducer: {
        counter: counterReducer, 
        todo: todoReducer
        
    },
});

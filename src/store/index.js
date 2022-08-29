import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : { counter : 0 },
    reducers : {
        incriment(state, action){
            state.counter += action.payload;
        },
        decriment(state, action){
            state.counter -= action.payload;
        }
    }
})

export const actions = counterSlice.actions

const store = configureStore({
    reducer : counterSlice.reducer
})

export default store;
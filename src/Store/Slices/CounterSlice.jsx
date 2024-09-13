import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name :"counter",
    initialState,
    reducers:{
        addCounter:(state,actions)=>{
            state.counter = ++state.counter
            console.log("add");
            
        },
        minusCounter:(state,actions)=>{
            state.counter = --state.counter
            console.log("Less");
            
        }
    }
})

const {actions,reducer} = counterSlice

export const {addCounter , minusCounter} = actions
export default reducer
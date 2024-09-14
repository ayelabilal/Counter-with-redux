import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name :"counter",
    initialState,
    reducers:{
        addCounter:(state)=>{
            state.counter++;
            // console.log("add");
            
        },
        minusCounter:(state)=>{
           if (state.counter >0 ){
            state.counter--;
           }
            
        },
    },
});

const {actions,reducer} = counterSlice

export const {addCounter , minusCounter} = actions;
export default reducer;
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minusCounter } from '../Store/Slices/CounterSlice'

const Button = () => {
    const dispatch = useDispatch()

    const handleAction1 = ()=>{
        dispatch(addCounter());
    }
    const handleAction2 = ()=>{
        dispatch(minusCounter());
    }
  return (
    <div>
      <button onClick={handleAction1}>Add</button>
<button onClick={handleAction2}>Less</button> 
   </div>
  )
}

export default Button

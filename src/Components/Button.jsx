import React from "react";
import { useDispatch } from "react-redux";
import { addCounter, minusCounter } from "../Store/Slices/CounterSlice";

const Button = () => {
  const dispatch = useDispatch();

  const handleAction1 = () => {
    dispatch(addCounter());
  };
  const handleAction2 = () => {
    dispatch(minusCounter());
  };
  return (
    <div>
      <button style={{marginLeft:"46%",fontSize:"30px"}} onClick={handleAction1}>Add</button>
      <button style={{marginLeft:"10px",fontSize:"30px"}} onClick={handleAction2}>Less</button>
    </div>
  );
};

export default Button;

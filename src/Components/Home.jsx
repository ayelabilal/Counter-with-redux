import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const counter = useSelector((state) => state.counter.counter);

  console.log("Counter:", counter);

  return (
    <div>
      <h1 style={{fontSize:"50",textAlign:"center"}}>Counter {counter}</h1>
    </div>
  );
};

export default Home;

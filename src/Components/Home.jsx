import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const counter = useSelector((state) => state.counterReducer);

  console.log("Counter:", counter);

  return (
    <div>
      <h1>Counter {counter}</h1>
    </div>
  );
};

export default Home;

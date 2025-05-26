import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {
  return (
    <>
        <AddTask />
        <Task />
      
    </>
  );
}

export default App;

// Store all tasks in state 
// use the useState Hook 
// map() example 
  // const listItems = products.map(product =>
  //   <li key={product.id}>
  //     {product.title}
  //   </li>
  // );

  // return (
  //   <ul>{listItems}</ul>
  // )

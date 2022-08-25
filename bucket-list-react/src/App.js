
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import data from './data.json';
import ToDoList from './components/ToDoList';
// import BucketForm from './components/BucketForm';
import ToDoForm from './components/ToDoForm'


function App() {
  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }
  const addTask = (userInput, userUrgency) => {
    let newTask = [...toDoList]
    newTask = [...newTask, { id: toDoList.length + 1, task: userInput, complete: false, urgency: userUrgency }]
    setToDoList(newTask)
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;

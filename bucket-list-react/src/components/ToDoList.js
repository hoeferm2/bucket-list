import React from 'react';
import ToDo from './ToDo';
import '../App.css';


export default function ToDoList({ toDoList, handleToggle }) {
    return (
        <div className='toDoList'>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} />
                )
            })}
        </div>
    );
};


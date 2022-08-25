import React from 'react';

const ToDo = ({ todo, handleToggle }) => {
    if (todo.complete === true) {
        console.log('true')
    } else {
        console.log('false')
    }
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div id={todo.id} key={todo.id + todo.task} name='todo' value={todo.id} onClick={handleClick} className={todo.complete ? "todo check" : ''}>
            {todo.task}
            {todo.urgency}
        </div>
    );
};

export default ToDo;
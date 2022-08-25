import React, { useState } from 'react'

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');
    const [letUrgency, setUrgency] = useState('');

    const urgencyLevels = ['not important', 'kinda important', 'VERY IMPORTANT'];

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput, letUrgency);
        setUserInput('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type='text' onChange={handleChange} placeholder='Enter a Task' />
            <div>
                <button type='submit' onClick={() => setUrgency(urgencyLevels[2])}> Very Important</button>
                <button type='submit' onClick={() => setUrgency(urgencyLevels[1])}> Kinda Important</button>
                <button type='submit' onClick={() => setUrgency(urgencyLevels[0])}> Not Important</button>
            </div>
        </form>
    )
}
export default ToDoForm;
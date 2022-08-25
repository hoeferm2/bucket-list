// import React, { useState } from 'react'
// import '../App.css';
// // import ToDoList from './ToDoList.js';
// import data from '../data.json';


// export default function BucketForm() {

//     const [userInput, setUserInput] = useState('')
//     const [toDoList, setToDoList] = useState(data)

//     const handleChange = (e) => {

//         // setUserInput = e.target.value

//         // const { name, value } = e.target;

//         // if (name === "bucketName") {
//         //     return setUserInput(value)
//         // } 
//         setUserInput(e.target.value)
//         console.log(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('been clicked');
//         addTask(userInput)
//         // let selectedOption = document.forms["bucketForm"];
//         // showValue.innerText = `You have selected: ${selectedOption.value}`;
//         //set it as empty after done
//         setUserInput('');
//         alert(`Hello Susie`);
//     };

//     const addTask = (userInput) => {
//         let thing = [...toDoList]
//         thing = [...thing, { id: toDoList.length + 1, task: userInput, complete: false }]
//         setToDoList(thing)
//         thing.push({ id: toDoList.length + 1, task: userInput, complete: false })
//     }
//     return (
//         <div>
//             <form className="form" name="bucketForm">
//                 <input name="bucketName" id="bucket-list-text" type="text" value={userInput} onChange={handleChange} />
//                 <select id="urgency" name="urgency">
//                     <option value="VERY IMPORTANT">VERY IMPORTANT</option>
//                     <option value="Kinda Important">Kinda Important</option>
//                     <option value="Not Important">Not Important</option>
//                 </select>
//                 <div id='display-value'></div>
//                 <button
//                     id="submitBucket"
//                     type="button"
//                     className="btn btn-danger"
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>{' '}
//             </form>
//         </div >
//     )
// }



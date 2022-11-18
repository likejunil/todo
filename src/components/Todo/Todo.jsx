import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

const Todo = ({todo, handleUpdate, handleDelete}) => {
    const onInputChange = (e) => {
        const checked = e.target.checked;
        handleUpdate({...todo, done: checked,});
    };
    
    const onButtonDelete = () => {
        handleDelete(todo.id);
    }
    
    return (
        <div>
            <input type='checkbox' id={todo.id} onChange={onInputChange}/>
            <label htmlFor={todo.id}>{todo.title}</label>
            <button onClick={onButtonDelete}><FaTrashAlt/></button>
        </div>
    );
};

export default Todo;
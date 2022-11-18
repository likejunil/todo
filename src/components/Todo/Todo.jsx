import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import {DONE, YET} from '../Common/Constant';

const Todo = ({todo, handleUpdate, handleDelete}) => {
    const onInputChange = (e) => {
        const state = e.target.checked ? DONE : YET;
        handleUpdate({...todo, state,});
    };
    
    const onButtonDelete = () => {
        handleDelete(todo.id);
    }
    
    return (
        <div>
            <input type='checkbox' id={todo.id} checked={todo.state === DONE} onChange={onInputChange}/>
            <label htmlFor={todo.id}>{todo.title}</label>
            <button onClick={onButtonDelete}><FaTrashAlt/></button>
        </div>
    );
};

export default Todo;
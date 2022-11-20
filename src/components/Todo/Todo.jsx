import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import {DONE, YET} from '../Common/Constant';
import styles from "./Todo.module.css";

const Todo = ({todo, handleUpdate, handleDelete}) => {
    const onInputChange = (e) => {
        const state = e.target.checked ? DONE : YET;
        handleUpdate({...todo, state,});
    };
    
    const onButtonDelete = () => {
        handleDelete(todo.id);
    }
    
    return (
        <li className={styles.todo}>
            <input
                className={styles.checkbox}
                type='checkbox'
                id={todo.id}
                checked={todo.state === DONE}
                onChange={onInputChange}
            />
            
            <label className={styles.text} htmlFor={todo.id}>{todo.title}</label>
            <span className={styles.icon}>
                <button className={styles.button} onClick={onButtonDelete}><FaTrashAlt/></button>
            </span>
        </li>
    );
};

export default Todo;
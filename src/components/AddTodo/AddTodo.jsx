import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import {DEFAULT as state} from "../Common/Constant";

const AddTodo = ({handleAdd}) => {
    const [value, setValue] = useState("");
    
    const onInputChange = (e) => {
        setValue(e.target.value);
    };
    
    const onAdd = (e) => {
        e.preventDefault();
        const title = value.trim();
        setValue('');
        if (title === '') return;
        handleAdd({
            id: uuidv4(),
            title,
            state,
        });
    }
    
    return (
        <form onSubmit={onAdd}>
            <input type='text' value={value} onChange={onInputChange}/>
            <button>Add</button>
        </form>
    );
};

export default AddTodo;
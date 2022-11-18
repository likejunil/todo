import React, {useState} from 'react';
import AddTodo from "../AddTodo/AddTodo";
import {v4 as uuidv4} from "uuid";
import {FaTrashAlt} from 'react-icons/fa';

const TodoList = () => {
    const [list, setList] = useState([
        // {id: 100, title: "인생의 진리를 깨닫기", done: false},
    ]);
    
    const addTodo = (todo) => {
        setList([...list, {
            id: uuidv4(),
            title: todo,
            done: false,
        }]);
    };
    
    return (
        <div>
            <ul>
                {list.map(m => <li key={m.id}>
                    <input type="checkbox"/>
                    {m.title}
                    <FaTrashAlt/>
                </li>)}
            </ul>
            <AddTodo addTodo={addTodo}/>
        </div>
    );
};

export default TodoList;
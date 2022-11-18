import React, {useState} from 'react';
import AddTodo from "../AddTodo/AddTodo";
import {v4 as uuidv4} from "uuid";
import {FaTrashAlt} from 'react-icons/fa';

const TodoList = () => {
    const [list, setList] = useState([
        // {id: 100, title: "인생의 진리를 깨닫기", done: false},
    ]);
    
    const onAdd = (todo) => {
        setList([...list, {
            id: uuidv4(),
            title: todo,
            done: false,
        }]);
    };
    
    const onDel = (event) => {
        const id = event.currentTarget.parentNode.id;
        setList(list.filter(m => m.id !== id));
    };
    
    return (
        <div>
            <ul>
                {list.map(m =>
                    <li key={m.id} id={m.id}>
                        <input type="checkbox"/>
                        {m.title}
                        <FaTrashAlt onClick={onDel}/>
                    </li>)}
            </ul>
            <AddTodo addTodo={onAdd}/>
        </div>
    );
};

export default TodoList;
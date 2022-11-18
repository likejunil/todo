import React, {useState} from 'react';
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

const TodoList = () => {
    const [list, setList] = useState([
        // {id: 100, title: "인생의 진리를 깨닫기", done: false},
    ]);
    
    const handleAdd = (todo) => {
        setList([...list, todo]);
    };
    
    const handleUpdate = (todo) => {
        setList(list.map(m => m.id === todo.id ? todo : m));
    }
    
    const handleDelete = (id) => {
        setList(list.filter(m => m.id !== id));
    }
    
    return (
        <div>
            <ul>
                {
                    list.map(m => <Todo
                        key={m.id}
                        todo={m}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}/>)
                }
            </ul>
            <AddTodo handleAdd={handleAdd}/>
        </div>
    );
};

export default TodoList;
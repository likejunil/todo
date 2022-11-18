import React, {useState} from 'react';
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import TodoFilter from "../TodoFilter/TodoFilter";
import {ALL} from "../Common/Constant";

const TodoList = () => {
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState(ALL);
    
    const handleFilter = (filter) => {
        setFilter(filter);
    }
    
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
            <TodoFilter handleFilter={handleFilter}/>
            <ul>
                {
                    list
                        .filter(m => filter === ALL || filter === m.state)
                        .map(m => <Todo
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
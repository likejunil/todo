import React, {useEffect, useState} from 'react';
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import TodoFilter from "../TodoFilter/TodoFilter";
import {ALL} from "../Common/Constant";
import styles from "./TodoList.module.css";
import {DarkModeProvider} from "../../context/DarkModeContext";

const loadTodos = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
};

const TodoList = () => {
    const [list, setList] = useState(() => loadTodos());
    const [filter, setFilter] = useState(ALL);
    
    useEffect(() => {
        const save = JSON.stringify(list);
        localStorage.setItem('todos', save);
    }, [list]);
    
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
        <DarkModeProvider>
            <TodoFilter selected={filter} handleFilter={handleFilter}/>
            <main className={styles.container}>
                <ul className={styles.list}> {
                    list
                        .filter(m => (filter === ALL || filter === m.state))
                        .map(m => <Todo
                            key={m.id}
                            todo={m}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}/>)
                } </ul>
                <AddTodo handleAdd={handleAdd}/>
            </main>
        </DarkModeProvider>
    );
};

export default TodoList;
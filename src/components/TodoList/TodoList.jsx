import React, {useState} from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState([
        {id: 123, title: "공부하기", state: true},
        {id: 124, title: "운동하기", state: true},
    ]);
    
    return (
        <div>
            <ul>
                {todo.map(m => <li key={m.id}>{m.title}</li>)}
            </ul>
        </div>
    );
};

export default TodoList;
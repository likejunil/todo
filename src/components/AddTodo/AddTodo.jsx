import React, {useState} from 'react';

const AddTodo = ({addTodo}) => {
    const [todo, setTodo] = useState("");
    
    const handleChange = (event) => {
        setTodo(event.target.value);
    };
    
    const handleAdd = (event) => {
        event.preventDefault();
        const target = todo.trim();
        setTodo("");
        if (!target) return;
        addTodo(target);
    };
    
    return (
        <div>
            <form onSubmit={handleAdd}>
                <input
                    id="input"
                    type="text"
                    onChange={handleChange}
                    value={todo}
                    placeholder="add todo"/>
                
                <button>Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
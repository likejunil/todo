import {FILTER} from "../Common/Constant";

const TodoFilter = ({handleFilter}) => {
    const onListClick = (e) => {
        handleFilter(e.target.value);
    }
    
    return (
        <div>
            <ul>
                {
                    FILTER.map((m, i) =>
                        <li key={i} value={i} onClick={onListClick}>{m}</li>)
                }
            </ul>
        </div>
    );
};

export default TodoFilter;
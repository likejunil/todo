import {FILTER} from "../Common/Constant";
import styles from './TodoFilter.module.css';
import {useDarkMode} from "../../context/DarkModeContext";
import {HiMoon, HiSun} from "react-icons/hi";

const TodoFilter = ({selected, handleFilter}) => {
    const onListClick = (e) => {
        handleFilter(Number(e.target.value));
    }
    
    const {darkMode, toggleDarkMode} = useDarkMode();
    
    return (
        <header className={styles.header}>
            <button className={styles.toggle} onClick={toggleDarkMode}>
                {darkMode ? <HiMoon/> : <HiSun/>}
            </button>
            <ul className={styles.filters}> {
                FILTER.map((m, i) =>
                    <li key={i}>
                        <button
                            className={`${styles.filter} ${FILTER[selected] === m && styles.selected}`}
                            value={i}
                            onClick={onListClick}>
                            {m}
                        </button>
                    </li>)
            } </ul>
        </header>
    );
};

export default TodoFilter;
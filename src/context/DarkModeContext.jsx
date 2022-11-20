import React, {createContext, useContext, useEffect, useState} from "react";

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
        updateDarkMode(!darkMode);
    }
    
    useEffect(() => {
        const dark = (localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefer-color-scheme: dark)').matches));
        setDarkMode(dark);
        updateDarkMode(dark);
    }, []);
    
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = 'light';
    }
}

export const useDarkMode = () => useContext(DarkModeContext);

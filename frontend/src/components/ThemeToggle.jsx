import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    // useState to store the theme of the website
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem("theme") === "light"
    });

    // control the storage of the theme of the website
    useEffect(() => {
        const root = window.document.documentElement;
        if (isLight) {
            root.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.remove("light");
            localStorage.setItem("theme", "dark");
        }
    }, [isLight]);


    return (
        <button
            onClick={() => setIsLight(!isLight)}
            className="rounded-full transition-all duration-300 hover:bg-text-main/10 flex items-center justify-center"
            aria-label="Toggle Theme"
        >
            {isLight ? (
                <Moon className="text-navy" size={20}/>
            ) : (
                <Sun className="text-savy" size={20}/>
            )}
        </button>
    );
};

export default ThemeToggle;

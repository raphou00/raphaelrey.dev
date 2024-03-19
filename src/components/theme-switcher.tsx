"use client";

import { useState, useEffect } from "react";
import * as Icon from "lucide-react";
import { getCookie, setCookie } from "cookies-next";

type Theme = "light" | "dark";

const ThemeSwitcher: React.FC = () => {
    const getTheme = () => {
        const theme = getCookie("theme");
        if (!theme || !["light", "dark"].includes(theme)) {
            return "dark";
        }
        return theme as Theme;
    };

    const [theme, setTheme] = useState<Theme>(getTheme());

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        setCookie("theme", theme);
    }, [theme]);

    return (
        <label className="btn btn-sm swap swap-rotate">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on"><Icon.Moon className="w-6 h-6" /></div>
            <div className="swap-off"><Icon.Sun className="w-6 h-6" /></div>
        </label>
    );
}

export default ThemeSwitcher;
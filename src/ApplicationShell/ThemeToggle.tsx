
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    localStorage.setItem("color-theme", isDarkMode ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const themeToggleDarkIcon: any = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon: any = document.getElementById(
      "theme-toggle-light-icon"
    );

    if (isDarkMode) {
      themeToggleLightIcon.classList.add("hidden");
      themeToggleDarkIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.add("hidden");
      themeToggleLightIcon.classList.remove("hidden");
    }
  }, [isDarkMode]);

  return (
    <button
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
        id="theme-toggle-dark-icon"
        icon={icons.faMoon}
        className={`w-4 h-4 ${isDarkMode ? "hidden" : ""}`}
      />
      <FontAwesomeIcon
        id="theme-toggle-light-icon"
        icon={icons.faSun}
        className={`w-4 h-4 ${isDarkMode ? "" : "hidden"}`}
      />
    </button>
  );
};


export default ThemeToggle;
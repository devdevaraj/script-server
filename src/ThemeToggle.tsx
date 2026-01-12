import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
 const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
 );

 useEffect(() => {
  if (theme === "dark") {
   document.documentElement.classList.add("dark");
  } else {
   document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
 }, [theme]);

 const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
 };

 return (
  <button
   onClick={toggleTheme}
   className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
   aria-label="Toggle Dark Mode"
  >
   {theme === "light" ? (
    <Sun className="w-6 h-6 text-yellow-500" />
   ) : (
    <Moon className="w-6 h-6 text-blue-400" />
   )}
  </button>
 );
}

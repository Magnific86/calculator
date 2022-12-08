import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeAction } from "./store/themeReducer";

export default function DarkMode() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.title = "Happy Calculating!";
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <button
        className="bg-purple-800 text-teal-400 rounded-full
            dark:bg-teal-400 dark:text-purple-800 hover:underline"
        onClick={() =>
          dispatch(setThemeAction(theme === "dark" ? "light" : "dark"))
        }
      >
        {theme}
      </button>
    </div>
  );
}

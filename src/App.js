import React from "react";
import Calculator from "./Calculator";
import DarkMode from "./DarkMode";

export default function App() {
  return (
    <div
      className="bg-teal-400 text-purple-800 dark:bg-purple-800
     dark:text-teal-400 min-h-screen font-mainFont text-5xl sm:text-7xl"
    >
      <DarkMode />
      <Calculator />
    </div>
  );
}

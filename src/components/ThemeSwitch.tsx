"use client";

import { MdWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const darkMode = theme === "dark";

  return (
    <label
      className={`bg-gray-200 rounded-full w-12 h-7 ml-4 cursor-pointer dark:bg-zinc-900 select-none`}
    >
      <div
        className="h-6 w-6 rounded-full bg-white m-0.5 flex items-center justify-center relative transition-all left-0 dark:bg-zinc-700"
        style={darkMode ? { left: "20px" } : {}}
      >
        {darkMode ? <BsFillMoonStarsFill /> : <MdWbSunny />}
      </div>
      <input
        checked={darkMode}
        className={`hidden`}
        type="checkbox"
        onChange={(event) => setTheme(event.target.checked ? "dark" : "light")}
      />
    </label>
  );
};

export default ThemeSwitch;

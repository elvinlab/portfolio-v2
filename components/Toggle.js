"use client";

import React, { useState } from "react";

import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="fixed z-10 top-4 right-4 flex items-center justify-center transition-transform active:scale-90">
      <input
        id="toggle"
        name="toggle"
        type="checkbox"
        className="hidden"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <label
        className="cursor-pointer flex w-6 h-6 p-3 rounded-25% shadow-md items-center justify-center transition bg-opacity-50 text-xs"
        htmlFor="toggle"
      >
        {isDark ? <Moon /> : <Sun />}
      </label>
    </div>
  );
};

export default Toggle;

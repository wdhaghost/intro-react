import React, { createContext, useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import "./LearnUseContext.css";
import CodeToShow from "./CodeToShow";
import List from "./List";
import Card from "./Card";
import { ThemeContext } from "./ThemeContext";

function LearnUseContext() {
  const codeToShow = CodeToShow;
   // Removed type for simplicity in JS
  const [themeState, setThemeState] = useState("dark");  // Now managing the theme as string directly

  const toggleTheme = () => {
    setThemeState(themeState === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <h2>Utilisation des context</h2>
      <div className="description">
        {/* Description content could go here */}
      </div>
      <hr />
      <label htmlFor="mode">Thème</label>
      <input
        type="checkbox"
        name="mode"
        id="mode"
        onChange={toggleTheme}
        checked={themeState === "light"}
      />
      <ThemeContext.Provider value={themeState}>
        <List />
        <Card />
      </ThemeContext.Provider>
      <div className="codeBlock">
        <CopyBlock
          language="tsx"
          text={codeToShow.code1}
          showLineNumbers={true}
          theme={dracula}
          wrapLongLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}

export default LearnUseContext;

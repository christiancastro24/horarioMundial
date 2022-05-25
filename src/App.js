import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/index";
import GlobalTheme from "./components/Styles/index";
import { Home } from './pages/Home/index.jsx';

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="App">
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalTheme />
        <Home toggleTheme={toggleTheme} theme={theme}/>
    </ThemeProvider>
    </div>
  );
}


export default App;

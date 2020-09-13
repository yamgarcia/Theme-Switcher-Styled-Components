import React, { useState } from "react";
import Header from "./components/Header";
import GobalStyles from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import usePersistedState from "./utils/usePersistedState";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;

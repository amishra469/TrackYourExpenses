import React from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./context/Theme";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

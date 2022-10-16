import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';

import { Router } from "./Router"
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { UserProvider } from "./contexts/UserContext";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
    
  )
}

export default App

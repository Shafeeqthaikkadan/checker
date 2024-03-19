import { useState } from "react";
import Catalogue from "../../features/catalogue/Catalogue";
import Header from "./Header";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";


function App() {
const [darkMode,setDarkMode]=useState(false);
const paletteType=darkMode ? 'dark':'light'

  const theme=createTheme({
    palette:{
      mode:paletteType,
      background:{
        default:paletteType==='light'?'#eaeaea':'#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
 
  return (
    <ThemeProvider theme={theme}>
      <Header handleThemeChange={handleThemeChange} darkMode={darkMode} />
      <Container>
        <Outlet />
      </Container>

    </ThemeProvider>
  )
}
export default App

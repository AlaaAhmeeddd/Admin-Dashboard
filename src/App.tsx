import Topbar from "./scenes/global/Topbar"
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

export default function App() {
  const [ theme, colorMode ] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Topbar />
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

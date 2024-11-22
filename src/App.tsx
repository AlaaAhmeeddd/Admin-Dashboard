import Topbar from "./scenes/global/Topbar"
import { ColorModeContext, useMode } from "./theme"
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Dashboard from './scenes/dashboard/index.tsx'
import SidebarSection from "./scenes/global/Sidebar.tsx"
import Team from "./scenes/team/index.tsx"
import Invoices from "./scenes/invoices/index.tsx"
import Contacts from "./scenes/contacts/index.tsx"
import Bar from "./scenes/bar/index.tsx"
import Form from "./scenes/form/index.tsx"
import Line from "./scenes/line/index.tsx"
import Pie from "./scenes/pie/index.tsx"
import FAQ from "./scenes/faq/index.tsx"
import Geography from "./scenes/geography/index.tsx"
import Calendar from "./scenes/calendar/index.tsx"

export default function App() {
  const [theme, colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box display="flex" height="100vh"> 
                  <SidebarSection />
                  <Box flex="1" overflow="auto"> 
                      <Topbar />
                      <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/team" element={<Team />} />
                          <Route path="/contacts" element={<Contacts />} />
                          <Route path="/invoices" element={<Invoices />} />
                          <Route path="/form" element={<Form />} />
                          <Route path="/bar" element={<Bar />} />
                          <Route path="/pie" element={<Pie />} />
                          <Route path="/line" element={<Line />} />
                          <Route path="/faq" element={<FAQ />} />
                          <Route path="/calendar" element={<Calendar />} />
                          <Route path="/geography" element={<Geography />} />
                      </Routes>
                  </Box>
              </Box>
          </ThemeProvider>
      </ColorModeContext.Provider>
  );
}


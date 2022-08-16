import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Home from "./pages/Home";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { YouTubeConverter } from "./pages/YouTubeConverter";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
          </Route>
          
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="yt-converter" element={<YouTubeConverter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

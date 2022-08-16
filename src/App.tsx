import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import Home from "./Home";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { YouTubeConverter } from "./YouTubeConverter";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="yt-converter" element={<YouTubeConverter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

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
import { DashboardLayout } from "./layouts/DefaultLayout";
import { YouTubeConverter } from "./pages/YouTubeConverter";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="yt-converter" element={<YouTubeConverter />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="test/test" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

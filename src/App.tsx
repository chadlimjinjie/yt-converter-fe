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
import { DefaultLayout } from "./layouts/DefaultLayout";
import { YouTubeConverter } from "./pages/YouTubeConverter";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Meet } from "./pages/Meet";
import "./index.css";
import { MrtCrowdLevel } from "./pages/MrtCrowdLevel";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />            
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="test/test" element={<Home />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="meet" element={<Meet />} />
            <Route path="meet/:meetingId" element={<Meet />} />
            <Route path="yt-converter" element={<YouTubeConverter />} />
            <Route path="mrt-crowd" element={<MrtCrowdLevel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

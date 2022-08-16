import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import { YouTubeConverter } from "./YouTubeConverter";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="yt-converter" element={<YouTubeConverter />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

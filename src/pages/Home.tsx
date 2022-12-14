import {
  Box,
  Link,
  VStack,
} from "@chakra-ui/react"
import {
  Link as RouterLink,
} from "react-router-dom";
import { Logo } from "../Logo"

export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Link
            color="teal.500"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RouterLink to="yt-converter">
              YouTube Video Converter
            </RouterLink>
          </Link>
        </VStack>
    </Box>
  );
}

import {
    Box,
    Text,
    Link,
    VStack,
    Stack,
    Code,
    Grid,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    ButtonGroup
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

import { useState } from "react"

export default function YouTubeConverter({ }) {

    const [videoLink, setVideoLink] = useState("")

    async function downloadMp3(url: string) {
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = `https://chad-rest-endpoint.herokuapp.com/api/v1/youtube/mp3?link=${url}`;

        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }

        document.body.appendChild(tempLink);
        tempLink.click();

        // Fixes "webkit blob resource error 1"
        setTimeout(function () {
            document.body.removeChild(tempLink);
        }, 200)
        setVideoLink("")
    }

    async function downloadMp4(url: string) {
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = `https://chad-rest-endpoint.herokuapp.com/api/v1/youtube/mp4?link=${url}`;

        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }

        document.body.appendChild(tempLink);
        tempLink.click();

        // Fixes "webkit blob resource error 1"
        setTimeout(function () {
            document.body.removeChild(tempLink);
        }, 200)
        setVideoLink("")
    }

    return (
        <Box fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={8}>
                    <FormControl>
                        <FormLabel>Video link</FormLabel>
                        <Input onChange={(e) => { setVideoLink(e.target.value) }} />
                        <FormHelperText>Test YouTube video https://www.youtube.com/watch?v=IScTJbj_6kc</FormHelperText>
                    </FormControl>
                    <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='blue' onClick={() => downloadMp3(videoLink)}>MP3</Button>
                        <Button colorScheme='blue' onClick={() => downloadMp4(videoLink)}>MP4</Button>
                    </Stack>

                </VStack>
            </Grid>
        </Box>
    )
}

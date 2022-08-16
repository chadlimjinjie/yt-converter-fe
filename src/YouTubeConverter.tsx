import { useState } from "react"
import {
    Box,
    VStack,
    Stack,
    Grid,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
} from "@chakra-ui/react"

export const YouTubeConverter = (): JSX.Element => {

    const [videoLink, setVideoLink] = useState<string>("")

    async function downloadMp3(url: string) {
        var tempLink: HTMLAnchorElement = document.createElement('a')
        tempLink.style.display = "none"
        tempLink.href = `https://chad-rest-endpoint.herokuapp.com/api/v1/youtube/mp3?link=${url}`

        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank')
        }

        document.body.appendChild(tempLink);
        tempLink.click();

        // Fixes "webkit blob resource error 1"
        setTimeout(function () {
            document.body.removeChild(tempLink)
        }, 200)
        setVideoLink("")
    }

    async function downloadMp4(url: string) {
        var tempLink: HTMLAnchorElement = document.createElement('a');
        tempLink.style.display = "none";
        tempLink.href = `https://chad-rest-endpoint.herokuapp.com/api/v1/youtube/mp4?link=${url}`

        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank')
        }

        document.body.appendChild(tempLink);
        tempLink.click()

        // Fixes "webkit blob resource error 1"
        setTimeout(function () {
            document.body.removeChild(tempLink)
        }, 200)
        setVideoLink("")
    }

    return (
        <Box fontSize="xl">
            <VStack spacing={8}>
                <FormControl>
                    <FormLabel>Video link</FormLabel>
                    <Input value={videoLink} onChange={(e) => { setVideoLink(e.target.value) }} />
                    <FormHelperText>Test YouTube video https://www.youtube.com/watch?v=IScTJbj_6kc</FormHelperText>
                </FormControl>
                <Stack spacing={4} direction='row' align='center'>
                    <Button colorScheme='blue' onClick={() => downloadMp3(videoLink)}>MP3</Button>
                    <Button colorScheme='blue' onClick={() => downloadMp4(videoLink)}>MP4</Button>
                </Stack>
            </VStack>
        </Box>
    )
}

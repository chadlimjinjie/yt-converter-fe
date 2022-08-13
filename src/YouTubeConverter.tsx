
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

import axios from "axios"
import { useState } from "react"

export default function YouTubeConverter({ }) {

    const [videoLink, setVideoLink] = useState("")

    async function downloadMp3(url: string) {
        const response = await axios.get(`https://chad-rest-endpoint.herokuapp.com/api/v1/youtube/mp3?link=${url}`, {
            responseType: 'blob'
        })
        const data = window.URL.createObjectURL(new Blob([response.data]));
        console.log(data)
    }

    async function downloadMp4(url: string) {
        const response = await axios.get(`https://chad-rest-endpoint.herokuapp.com/api/v1/youtube/mp4?link=${url}`, {
            responseType: 'blob'
        })
        const data = window.URL.createObjectURL(new Blob([response.data]));
        console.log(data)
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

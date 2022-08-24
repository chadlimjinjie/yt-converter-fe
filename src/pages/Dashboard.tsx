import { Center, Wrap, WrapItem } from "@chakra-ui/react"
import { AppCard } from "../shared/components/AppCard"

export const Dashboard = (): JSX.Element => {
    return (
        <Wrap spacing='20px' justify='center'>
            <WrapItem>
                <Center>
                    <AppCard title="YouTube Video Converter" to="/yt-converter" />
                </Center>
            </WrapItem>
            {/* <WrapItem>
                <Center>
                    <AppCard title="Meet" to="/meet" />
                </Center>
            </WrapItem> */}
            <WrapItem>
                <Center>
                    <AppCard title="MRT Crowd Level" to="/mrt-crowd" />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center>
                    <AppCard title="App 4" />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center>
                    <AppCard title="App 5" />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center>
                    <AppCard title="App 6" />
                </Center>
            </WrapItem>
        </Wrap>
    )
}

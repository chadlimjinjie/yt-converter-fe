import { Box, Center, Flex } from "@chakra-ui/react"
import { AppCard } from "../shared/components/AppCard"

export const Dashboard = ({ }): JSX.Element => {
    return (
        <div>
            {/* <h1>Dashboard works</h1> */}
            <Flex>
                <Center flex='1'>
                    <AppCard title="Camera" />
                </Center>
                <Center flex='1'>
                    <AppCard title="Camera" />
                </Center>
                <Center flex='1'>
                    <AppCard title="Camera" />
                </Center>
            </Flex>
        </div>
    )
}

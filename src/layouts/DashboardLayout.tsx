import { Box, Text, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Spacer, useDisclosure, VStack, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
// import {  } from "react-icons/fa"
import { HamburgerIcon } from '@chakra-ui/icons'

import {
    Link as RouterLink,
} from "react-router-dom";

export const DashboardLayout = ({ }): JSX.Element => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const placement = "left"

    return (
        <Box className="dashboard-layout">
            <Flex p={2}>
                <IconButton
                    size="md"
                    fontSize="lg"
                    variant="ghost"
                    colorScheme='blue'
                    // marginLeft="2"
                    onClick={onOpen}
                    icon={<HamburgerIcon />}
                    aria-label=""
                />
                <Spacer />
                <ColorModeSwitcher />
            </Flex>
            <Box p={2}>
                <Outlet />
            </Box>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <VStack
                            align='stretch'
                        >

                            <RouterLink to="/">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    Home
                                </Button>
                            </RouterLink>

                            <RouterLink to="/dashboard">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    Dashboard
                                </Button>
                            </RouterLink>


                            <RouterLink to="/yt-converter">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    YouTube video converter
                                </Button>
                            </RouterLink>

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

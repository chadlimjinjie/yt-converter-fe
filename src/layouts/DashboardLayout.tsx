import { Box, Text, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Spacer, useDisclosure, VStack, IconButton, Grid, GridItem } from "@chakra-ui/react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ColorModeSwitcher } from "../shared/components/ColorModeSwitcher"
import { HamburgerIcon } from '@chakra-ui/icons'

import {
    Link as RouterLink,
} from "react-router-dom";

export const DashboardLayout = ({ }): JSX.Element => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const placement = "left"

    return (
        <Grid
            className="dashboard-layout"
            templateAreas={`"header"
                  "main"
                  "footer"`}
            gridTemplateRows={'50px 1fr 100px'}
            gridTemplateColumns={'1fr'}
            h='100vh'
            gap='1'
            // color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem area={'header'}>
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
            </GridItem>
            <GridItem area={'main'} p={2}>
                <Outlet />
            </GridItem>
            <GridItem area={'footer'}>
                Footer
            </GridItem>
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
        </Grid>
    )
}

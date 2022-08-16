import { Box, Text, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Spacer, useDisclosure, VStack, IconButton, Grid, GridItem, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { useEffect, useMemo, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ColorModeSwitcher } from "../shared/components/ColorModeSwitcher"
import { HamburgerIcon } from '@chakra-ui/icons'

import {
    Link as RouterLink,
} from "react-router-dom";

interface pathInfo {
    name: string,
    path: string,
}

type pathname = {
    [key: string]: string
}

const PATHNAME_MAP: pathname = {
    "": "Home",
    "dashboard": "Dashboard",
    "yt-converter": "YouTube Converter",
}

export const DashboardLayout = ({ }): JSX.Element => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const placement = "left"
    const location = useLocation()
    const locationPathname = location.pathname
    const [path, setPath] = useState<Array<pathInfo>>([])

    const pathnameChange = useMemo(() => {
        setPath([])
    }, [locationPathname])

    useEffect(() => {
        var pathArray = locationPathname.split("/");
        var paths: Array<pathInfo> = [];
        pathArray.forEach((item, index) => {
            if (item !== "") {
                paths.push({
                    name: item,
                    path: `${pathArray.slice(0, index + 1).join("/")}`
                })
            }
            document.title = PATHNAME_MAP[item] || item
        })
        setPath(paths)
    }, [locationPathname])

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
                    <Breadcrumb pl={2} m={"auto"}>
                        {
                            path.map((item, index) => {
                                return (
                                    <BreadcrumbItem key={index}>
                                        <BreadcrumbLink as={RouterLink} to={item.path}>
                                            {PATHNAME_MAP[item.name] || item.name}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                )
                            })
                        }
                    </Breadcrumb>

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

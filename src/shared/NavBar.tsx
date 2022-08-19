import { HamburgerIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Spacer, useDisclosure, VStack } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"
import {
    Link as RouterLink, useLocation,
} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

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
    "yt-converter": "YouTube Video Converter",
    "login": "Login",
    "register": "Register",
}

export const NavBar = () => {

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
        <Flex>
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

                            <RouterLink to="login">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    Login
                                </Button>
                            </RouterLink>

                            <RouterLink to="register">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    Register
                                </Button>
                            </RouterLink>

                            <RouterLink to="mrt-crowd">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    MRT Crowd Level
                                </Button>
                            </RouterLink>

                            <RouterLink to="meet">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    Meet
                                </Button>
                            </RouterLink>

                            {/* <RouterLink to="dashboard">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    Dashboard
                                </Button>
                            </RouterLink> */}

                            {/* <RouterLink to="yt-converter">
                                <Button w={"100%"} colorScheme='teal' variant='ghost'>
                                    YouTube Video Converter
                                </Button>
                            </RouterLink> */}

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

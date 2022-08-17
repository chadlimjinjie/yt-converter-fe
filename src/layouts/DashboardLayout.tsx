import { Container, Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { NavBar } from "../shared/NavBar"

export const DashboardLayout = ({ }) => {
    return (
        /**
         * implement grid system
         */

        <Grid
            className="default-layout"
            templateAreas={`"header"
               "main"
               "footer"`}
            gridTemplateRows={'50px 1fr'}
            gridTemplateColumns={'1fr'}
            h='100vh'
            gap='1'
            fontWeight='bold'
        >
            <GridItem area={'header'} p={2}>
                <NavBar />
            </GridItem>
            <GridItem area={'main'} p={2}>
                <Outlet />
            </GridItem>
            <GridItem area={'footer'} p={2}>
                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="chadlimjinjie" data-version="v1"></div>
            </GridItem>

        </Grid>
    )
}

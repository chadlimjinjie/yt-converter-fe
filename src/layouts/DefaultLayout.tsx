import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { NavBar } from "../shared/NavBar"

export const DefaultLayout = () => {

    return (
        <Grid
            className="default-layout"
            templateAreas={`"header"
                  "main"
                  "footer"`}
            gridTemplateRows={'50px 1fr'}
            gridTemplateColumns={'1fr'}
            h='100vh'
            gap='1'
            // color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem area={'header'} p={2}>
                <NavBar />
            </GridItem>
            <GridItem area={'main'} p={2}>
                <Outlet />
            </GridItem>
            <GridItem area={'footer'} p={2}>

            </GridItem>

        </Grid>
    )
}

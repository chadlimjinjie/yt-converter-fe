import { Badge, Box, Link } from "@chakra-ui/react"
import {
    Link as RouterLink
} from "react-router-dom";

export const AppCard: React.FC<{ title: string, to?: string }> = ({ title, to = "#" }) => {

    return (
        <Link as={RouterLink} to={to}>
            <Box width='300px' height='300px' borderWidth='1px' borderRadius='lg'>
                <Box p='6'>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {title}
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

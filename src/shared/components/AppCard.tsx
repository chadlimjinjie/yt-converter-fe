import { Badge, Box } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

export const AppCard = ({ ...props }) => {

    return (
        <Box width='300px' height='300px' borderWidth='1px' borderRadius='lg' p={2}>
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {props.title}
                </Box>
            </Box>
        </Box>
    )
}

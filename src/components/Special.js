import { Stack, HStack, VStack, Box, Button, GridItem, Grid, Text, Link } from '@chakra-ui/react'

function Special() {
    return(
        <Box p={4}>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' h={12} justifyContent='flex-start' textAlign='center'>
                    <Text fontSize='3xl' fontWeight='bold'>
                        This weeks specials!
                    </Text>
                </GridItem>
                <GridItem w='100%' h={12} textAlign='center'>
                   <Button sx={{ backgroundColor: "#F4CE14" }}>Online Menu</Button>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Special;
import { Stack, HStack, VStack, Box, Button, GridItem, Grid, Text, Link } from '@chakra-ui/react'
import Restaurant from '../images/restaurantfood.jpg'

function Hero() {
    return(
        <Box p={4}>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} sx={{backgroundColor: '#495E57'}}>
                <GridItem w="100%" h={60} textAlign='center' pl={4} pt={3}>
                    <Text fontSize='3xl' fontWeight='bold' sx={{color:'#F4CE14'}}>
                      Little Lemon
                    </Text>
                    <Text fontSize='2xl' fontWeight='bold' color='white'>
                      Chicago
                    </Text>
                    <Text fontSize='lg' color='white' mt={32}>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
                    </Text> <br></br> <br></br> <br></br> <br></br> <br></br>
                    <Link href="/booking">
                       <Button sx={{ backgroundColor: "#F4CE14" }}>Reserve a table</Button>
                    </Link>
                </GridItem>
                <GridItem width='100%' sx={{backgroundColor: '#495E57'}}>
                    <Box justifyContent='flex-end'>
                      <img src={Restaurant}/>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Hero;
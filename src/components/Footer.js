import { Stack, HStack, VStack, Box, Button, GridItem, Grid, Text, Link, Heading, Image } from '@chakra-ui/react'
import FooterImage from '../images/Footer.png'

function Footer() {
    return(
        <Box p={4}>
            <Grid spacing={4} templateColumns='repeat(3, 1fr)'>
              <GridItem w="100%" textAlign='center' pl={4} pt={3}>
                <Image src={FooterImage} height={200}/>
              </GridItem>
              <GridItem w="100%" textAlign='center' pl={4} pt={3} fontWeight='bold'>
                <VStack spacing={3}>
                  <a href='/'>Home</a>
                  <a href='/about'>About</a>
                  <a href='/menu'>Menu</a>
                  <a href='/booking'>Reservations</a>
                  <a href='/order'>Order</a>
                  <a href='/login'>Login</a>
                </VStack>
              </GridItem>
              <GridItem w="100%" textAlign='center' pl={4} pt={3} fontWeight='bold'>
                <VStack spacing={8}>
                  <Text>2606 Poplar Street,<br></br> Chicago, <br></br> Illinois,<br></br>60607</Text>
                  <Text>info@littlelemon.com</Text>
                  <Text>+1  708-675-4415</Text>
                </VStack>
              </GridItem>
            </Grid>
        </Box>
    );
}

export default Footer;
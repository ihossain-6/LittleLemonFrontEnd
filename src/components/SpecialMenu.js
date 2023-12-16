import { Stack, HStack, VStack, Box, Button, GridItem, Grid, Text, Link, Heading, Image } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Salad from '../images/greeksalad.jpg'
import Dessert from '../images/lemondessert.jpg'
import Brus from '../images/bruschetta.jpg'

function SpecialMenu() {
    return(
      <Box p={4} mb={300}>
        <Grid spacing={4} templateColumns='repeat(3, 1fr)'>
          <GridItem w="100%" h={60} textAlign='center' pl={4} pt={3}>
            <Card sx={{backgroundColor: '#EDEFEE'}}>
              <CardHeader>
                <Image src={Salad} />
                  <HStack spacing={44}>
                    <Heading size='md' textAlign='left' pt={3}> Greek Salad</Heading>
                    <Heading size='md' textAlign='right' pt={3} color='#F4CE14'>$12.99</Heading>
                  </HStack>
              </CardHeader>
              <CardBody>
                <Text textAlign='left'>The famous greek salad of crispy lettuce, olives and our Chicago style feta cheese, granished with crunchy garlic and rosemary croutons.</Text>
              </CardBody>
              <CardFooter>
                <Button sx={{ backgroundColor: "#F4CE14" }}>Order a delivery</Button>
              </CardFooter>
            </Card>
           </GridItem>
           <GridItem w="100%" h={60} textAlign='center' pl={4} pt={3}>
            <Card sx={{backgroundColor: '#EDEFEE'}}>
              <CardHeader>
                <Image src={Brus} />
                <Heading size='md'>
                  <HStack spacing={44}>
                    <Heading size='md' textAlign='left' pt={3}> Bruschetta</Heading>
                    <Heading size='md' textAlign='right' pt={3} pl={6} color='#F4CE14'>$5.99</Heading>
                  </HStack>
                </Heading>
              </CardHeader>
              <CardBody>
                <Text textAlign='left'>Our bruschetta is made form grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</Text>
              </CardBody>
              <CardFooter>
                <Button sx={{ backgroundColor: "#F4CE14" }}>Order a delivery</Button>
              </CardFooter>
            </Card>
           </GridItem>
           <GridItem w="100%" h={60} textAlign='center' pl={4} pt={3}>
             <Card sx={{backgroundColor: '#EDEFEE'}}>
              <CardHeader>
                <Image src={Dessert} style={{objectFit: 'strech'}}/>
                <Heading size='md'>
                  <HStack spacing={40}>
                    <Heading size='md' textAlign='left' pt={3}> Lemon Dessert</Heading>
                    <Heading size='md' textAlign='right' pt={3} color='#F4CE14'>$5.00</Heading>
                  </HStack>
                </Heading>
              </CardHeader>
              <CardBody>
                <Text textAlign='left'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</Text>
              </CardBody>
              <CardFooter>
                <Button sx={{ backgroundColor: "#F4CE14" }}>Order a delivery</Button>
              </CardFooter>
            </Card>
           </GridItem>
        </Grid>
      </Box>
    );
}

export default SpecialMenu;
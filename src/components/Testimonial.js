import { Stack, HStack, VStack, Box, Button, GridItem, Grid, Text, Link, Heading, Image, Avatar } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Avatar1 from '../images/Avatar1.jpg'
import Avatar2 from '../images/Avatar2.jpg'
import Avatar3 from '../images/Avatar3.jpg'

function Testimonial() {
    return(
        <Box p={4}>
            <Text fontSize='3xl' fontWeight='bold' textAlign='center'>
              Testimonials
            </Text>
            <Grid p={4} spacing={4} templateColumns='repeat(3, 1fr)' mt={41} mb={10}>
               <GridItem w="100%" textAlign='center' pt={3}>
                 <Card sx={{backgroundColor: '#EDEFEE'}}>
                   <CardHeader>
                     <Avatar size='lg' src={Avatar1}/>
                   </CardHeader>
                   <CardBody>
                      <Text textAlign='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis nam. Eum hic nulla officia molestias quaerat quidem in quia rerum sint, dicta atque fuga explicabo iste neque harum voluptas. iste neque harum voluptas.</Text>
                   </CardBody>
                   <CardFooter>
                      <Text textAlign='center' fontWeight='bold'>-Mark</Text>
                   </CardFooter>
                 </Card>
               </GridItem>
               <GridItem w="100%" textAlign='center' pl={4} pt={3}>
                 <Card sx={{backgroundColor: '#EDEFEE'}}>
                   <CardHeader>
                     <Avatar size='lg' src={Avatar2}/>
                   </CardHeader>
                   <CardBody>
                      <Text textAlign='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis nam. Eum hic nulla officia molestias quaerat quidem in quia rerum sint, dicta atque fuga explicabo iste neque harum voluptas.</Text>
                   </CardBody>
                   <CardFooter>
                      <Text textAlign='center' fontWeight='bold'>-John</Text>
                   </CardFooter>
                 </Card>
               </GridItem>
               <GridItem w="100%" textAlign='center' pl={4} pt={3}>
                 <Card sx={{backgroundColor: '#EDEFEE'}}>
                   <CardHeader>
                     <Avatar size='lg' src={Avatar3}/>
                   </CardHeader>
                   <CardBody>
                      <Text textAlign='left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis nam. Eum hic nulla officia molestias quaerat quidem in quia rerum sint, dicta atque fuga explicabo iste neque harum voluptas.</Text>
                   </CardBody>
                   <CardFooter>
                      <Text textAlign='center' fontWeight='bold'>-Nathan</Text>
                   </CardFooter>
                 </Card>
               </GridItem>
            </Grid>
        </Box>
    );
}

export default Testimonial;
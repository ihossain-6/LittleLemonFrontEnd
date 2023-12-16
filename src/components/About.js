import { Stack, HStack, VStack, Box, Button, GridItem, Grid, Text, Link, Heading, Image, Avatar } from '@chakra-ui/react'
import MarioandAdrian from '../images/About.jpg'

function About() {
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
                    <Text fontSize='lg' color='white' mt={20} mb={20}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis nam. Eum hic nulla officia molestias quaerat quidem in quia rerum sint, dicta atque fuga explicabo iste neque harum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis nam. Eum hic nulla officia molestias quaerat quidem in quia rerum sint, dicta atque fuga explicabo iste neque harum voluptas.
                    </Text>
                </GridItem>
                <GridItem width='100%' sx={{backgroundColor: '#495E57'}}>
                    <Box justifyContent='flex-end'>
                      <img src={MarioandAdrian}/>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default About;
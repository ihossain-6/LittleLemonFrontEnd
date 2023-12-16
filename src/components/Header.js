import * as React from 'react';
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'
import Logo from '../images/Logo.png'
import { Grid, GridItem } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

function Header() {

  return (
    <Box w='100%' p={4}>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' objectFit='contain'>
          <Link href='/home'>
            <img src={Logo} height={30}/>
          </Link>
        </GridItem>
        <GridItem w='100%' h={12} colStart={3} colEnd={6} pl={6} pt={6} fontSize={15} fontWeight='bold'>
          <HStack spacing={10} justifyContent='flex-end'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/menu'>Menu</a>
            <a href='/booking'>Reservations</a>
            <a href='/order'>Order</a>
            <a href='/login'>Login</a>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Header;
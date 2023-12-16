import Header from './Header'
import Hero from './Hero'
import Special from './Special'
import SpecialMenu  from './SpecialMenu';
import Testimonial from './Testimonial';
import About from './About'
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react'

function Home() {
    return (
    <ChakraProvider>
        <Header />
        <Hero />
        <Special />
        <SpecialMenu />
        <Testimonial />
        <About />
        <Footer />
    </ChakraProvider>
    );
}

export default Home;
import {Box} from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import Booking from './Booking'

function BookingPage() {
    return(
    <Box>
        <Box>
            <Header />
        </Box>
        <Booking />
        <Footer />
    </Box>
    );
}

export default BookingPage
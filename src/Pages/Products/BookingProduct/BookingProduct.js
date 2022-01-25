import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const BookingProduct = ({ booking, date, setBookingSuccess }) => {
    const { name, price } = booking || {};
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" gutterBottom="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom="div">
                        {price}
                    </Typography>
                    <Typography variant="h5" gutterBottom="div">
                        {/* {space} Product Available */}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK NOW</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default BookingProduct;
import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingProduct from '../BookingProduct/BookingProduct';


const AvailableProducts = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    // Send Data
    // const { productId } = useParams();
    const [bookings, setBookings] = useState([]);

    // https://mysterious-reef-83390.herokuapp.com/products/${productId}

    useEffect(() => {
        fetch(`https://mysterious-reef-83390.herokuapp.com/products`)
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'Info.main', mb: 4 }}>Booking Dates on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Book successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <BookingProduct
                        key={booking._id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></BookingProduct>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableProducts;
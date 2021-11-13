import { Container, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#074BE8', textAlign: "center" }}>
                YOUR BOOKING DATE IS: {new Date(date).toDateString()};
            </Typography>
        </Container>
    );
};

export default Booking;
import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../Calender/Calender';

const BookingHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookingHeader;
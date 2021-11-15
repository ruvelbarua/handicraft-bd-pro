import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { productData } from '../../Shared/dataInfo/dataInfo';
import MuButton from '../../Shared/StyleComponent/MuButton/MuButton';
import ProductOrder from '../ProductOrder/ProductOrder';

const Booking = ({ date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#074BE8', textAlign: "center", mb: 4 }}>
                BOOKING DATE IS: {new Date(date).toDateString()}
            </Typography>
            <Grid container spacing={3}>
                {
                    productData.map(({ id, name, description, price }) => <Grid key={id}
                        item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2, textAlign: "center" }} variant="outlined">
                            <Typography variant="h5" color="#245C26">{name}</Typography>
                            <Typography variant="h6" color="#5C2924">Price:{price}Tk</Typography>
                            <Typography variant="subtitle" color="#0A6263" sx={{ display: 'block', my: 2 }}>{description}</Typography>
                            <MuButton onClick={handleOpen}>Buy Now</MuButton>
                        </Paper>
                        <ProductOrder date={date} name={name} price={price} handleClose={handleClose} open={open} />
                    </Grid>)
                }
            </Grid>

        </Container>
    );
};

export default Booking;
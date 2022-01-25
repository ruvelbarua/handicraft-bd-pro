import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MuButton from '../../Shared/StyleComponent/MuButton/MuButton';
import ProductOrder from '../ProductOrder/ProductOrder';

const ProductBooking = ({ date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [getproducts, setGetProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => setGetProducts(data));
    }, []);


    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#014305 ', textAlign: "center", mb: 4 }}>
                YOUR BOOKING DATE IS: {new Date(date).toDateString()}
            </Typography>
            <Grid container spacing={3}>
                {
                    getproducts.map(({ _id, name, description, price, img }) => <Grid key={_id}
                        item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2, textAlign: "center" }} variant="outlined">
                            <CardMedia
                                component="img"
                                style={{ width: '100%', height: '280px', margin: '0 auto' }}
                                image={img}
                                alt="green iguana"
                            />
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

export default ProductBooking;
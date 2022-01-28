import { Button, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Booking = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])

    // ON SUBMIT PRODUCT

    return (

        <Box sx={{ flexGrow: 1, my: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <h2>YOUR SELECTED PRODUCT</h2>
                    <div className="p-5">
                        <img style={{ height: '380px', width: '100%' }} src={product.img} alt="" />
                    </div>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Form>
                        <div className="text-success">
                            <h3>PRODUCT DETAILS</h3>
                        </div>
                        <p>Product: {product.name}</p>
                        <p>Color: {product.description}</p>
                        <p>Total Price: {product.price}</p>
                        <p>Special Discount:</p>
                        <p className="text-success">
                            Buy minimum 8 peces then you gain price 10% discount.
                        </p>
                        <Button onClick="" variant="contained">Add to Card</Button>
                        <Link href="/home">
                            <Button variant="contained">HOME</Button></Link>
                    </Form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Booking;
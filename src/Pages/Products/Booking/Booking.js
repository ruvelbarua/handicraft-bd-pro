import { Button, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';
// import Imagelogo from '../../../images/about/bhrs.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

/*const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));*/

const Booking = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

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
                        {/* <img src={product.img} alt="" />
                        <h4 className="text-place"> {product.name}</h4> */}
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

        // <div className="my-5 container-fluied">
        //     <h1>YOUR SELECTD PRODUCT</h1>
        //     <div className="row">
        //         <div className="col-md-4 my-5 p-5 bg-light">
        //             <div className="text-primary tour-card">
        //                 <h2>HANDICRAFT BD PRODUCTS</h2>
        //                 <img src={Imagelogo} alt="" />
        //             </div>
        //         </div>
        //         <div className="col-md-8">
        //             <Form>
        //                 <div className="text-success">
        //                     <h3>PRODUCT DETAILS</h3>
        //                 </div>
        //                 <img src={product.img} alt="" />
        //                 <h4 className="text-place"> {product.name}</h4>
        //                 <h3>Product: {product.description}</h3>
        //                 <h5>Total Price: {product.price}</h5>
        //                 <p>Special Discount:</p>
        //                 <p className="text-success">
        //                     Buy minimum 8 peces then you gain price 10% discount.
        //                 </p>
        //                 <Button onClick="" variant="contained">Add to Card</Button>
        //             </Form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Booking;
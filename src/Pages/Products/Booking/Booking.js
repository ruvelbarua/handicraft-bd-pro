import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import Imagelogo from '../../../images/about/bhrs.png'

const Booking = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://mysterious-reef-83390.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    // ON SUBMIT PRODUCT

    return (
        <div className="my-5 bg-light">
            <h1>YOUR SELECTED PRODUCT</h1>
            <div className="row">
                <div className="col-md-4 my-5 p-5 bg-light">
                    <div className="text-primary tour-card">
                        <div className="text-success">
                            <h3>PRODUCT DETAILS</h3>
                        </div>
                        <Form>
                            <img src={product.img} alt="" />
                            <h4 className="text-place"> {product.name}</h4>
                            <h3>Product: {product.description}</h3>
                            <h5>Total Price: {product.price}</h5>
                            <p>Special Discount:</p>
                            <p className="text-success">
                                Buy minimum 8 peces then you gain price 10% discount.
                            </p>
                        </Form>
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <img src={Imagelogo} alt="" />
                    </div>
                    <h2>HANDICRAFT BD PRODUCTS</h2>
                </div>
            </div>
        </div>
    );
};

export default Booking;
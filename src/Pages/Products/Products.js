import React, { useState } from 'react';
import AddProducts from './AddProducts/AddProducts';
import Booking from './Booking/Booking';
import Product from './Product/Product';
import ProductBanner from './ProductBanner/ProductBanner';
import UpdateProduct from './UpdateProduct/UpdateProduct';

const Products = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Product></Product>
            <UpdateProduct></UpdateProduct>
            <AddProducts></AddProducts>
            <ProductBanner date={date} setDate={setDate} />
            <Booking date={date} />
        </div>
    );
};

export default Products;
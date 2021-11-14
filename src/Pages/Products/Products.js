import React, { useState } from 'react';
import AddProducts from './AddProducts/AddProducts';
import Booking from './Booking/Booking';
import ProductBanner from './ProductBanner/ProductBanner';

const Products = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AddProducts></AddProducts>
            <ProductBanner date={date} setDate={setDate} />
            <Booking date={date} />
        </div>
    );
};

export default Products;
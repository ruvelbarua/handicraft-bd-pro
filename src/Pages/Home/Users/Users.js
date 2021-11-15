import React, { useState } from 'react';
import Booking from '../../Products/Booking/Booking';
import ProductBanner from '../../Products/ProductBanner/ProductBanner';
import ProductOrder from '../../Products/ProductOrder/ProductOrder';

const Users = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ProductOrder></ProductOrder>
            <ProductBanner date={date} setDate={setDate} />
            <Booking date={date} />

        </div>
    );
};

export default Users;
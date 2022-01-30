import React, { useState } from 'react';
import ProductBanner from '../../Products/ProductBanner/ProductBanner';


const Users = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ProductBanner date={date} setDate={setDate} />
            
        </div>
    );
};

export default Users;
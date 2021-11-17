import React from 'react';
import AddProducts from '../../Products/AddProducts/AddProducts';
import UpdateProduct from '../../Products/UpdateProduct/UpdateProduct';

const Admin = () => {
    return (
        <div>
            <UpdateProduct></UpdateProduct>
            <AddProducts></AddProducts>
        </div>
    );
};

export default Admin;
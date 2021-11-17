import React from 'react';
import AddProducts from '../../Products/AddProducts/AddProducts';
import ManageProducts from '../../Products/ManageProducts/ManageProducts';
import UpdateProduct from '../../Products/UpdateProduct/UpdateProduct';

const Admin = () => {
    return (
        <div>
            <ManageProducts></ManageProducts>
            <UpdateProduct></UpdateProduct>
            <AddProducts></AddProducts>
        </div>
    );
};

export default Admin;
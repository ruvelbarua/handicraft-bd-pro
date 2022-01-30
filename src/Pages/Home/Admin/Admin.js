import React from 'react';
import AddProducts from '../../Dashboard/AddProducts/AddProducts';
import ManageProducts from '../../Dashboard/ManageProducts/ManageProducts';
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
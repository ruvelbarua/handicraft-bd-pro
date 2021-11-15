import React from 'react';
import AddProducts from '../../Products/AddProducts/AddProducts';
import UpdateProduct from '../../Products/UpdateProduct/UpdateProduct';
import Services from '../Services/Services';

const Admin = () => {
    return (
        <div>
            <Services></Services>
            <UpdateProduct></UpdateProduct>
            <AddProducts></AddProducts>
        </div>
    );
};

export default Admin;
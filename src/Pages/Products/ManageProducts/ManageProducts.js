import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ManageProduct.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // DELETE DATA LINK
    const handleDelete = (id) => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully Deleted.')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }

            })
    }

    return (
        <div className="container my-5">
            <h1>MANAGE YOUR PRODUCT</h1>
            <div className="row">
                {
                    products.map(product => <div key={product._id} className="col-md-4 bg-light border p-3">
                        <div className="">
                            <img src={product.img} alt="" />
                        </div>
                        <h3>Price:{product.price}</h3>
                        <p>Name:{product.name}</p>
                        <p>{product.description}</p>
                        <Button className="border text-danger" onClick={() => handleDelete(product._id)} variant="">Delete</Button>
                        {/* <Button className="border text-success" onClick={() => (product._id)} variant="">Cancel</Button> */}
                    </div>)
                }

            </div>

        </div>
    );
};

export default ManageProducts;
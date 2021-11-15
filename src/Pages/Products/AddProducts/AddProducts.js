import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddProducts.css";

const AddProducts = () => {
    const { register, handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/addproducts', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        console.log(data);
    };

    return (
        <div>
            <div className="text-center">
                <h2 className="mt-5 text-center text-primary">Add New Product</h2>
                <div className="login-box w-25 m-auto mt-5">
                    <div className="event-box border border d-flex justify-contnet-center">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")}
                                    placeholder="Product Name"
                                    className="p-2 m-2 w-90" />
                                <br />
                                <input {...register("price")}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-90" />
                                <br />
                                <input {...register("description")}
                                    placeholder="description"
                                    className="p-2 m-2 w-90" />
                                <br />
                                <input {...register("date")}
                                    type="Date"
                                    className="p-2 m-2 w-90" />
                                <br />
                                <input {...register("img")}
                                    placeholder="Image"
                                    className="p-2 m-2 w-90" />
                                <br />
                                <select {...register("design")} className="p-2 m-2 w-90">
                                    <option value="premium">Premium</option>
                                    <option value="supper">Supper</option>
                                    <option value="classic">Classic</option>
                                </select>
                                <br />
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;



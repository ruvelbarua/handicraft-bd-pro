import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

// DISPLAY UPDATE PRODUCT
const UpdateProduct = () => {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        // Product Update Link
        fetch(`http://localhost:5000/update/${productId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result.modifiedCount));
    };
    // Single Product Link
    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${productId}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, []);
    return (
        <div className="text-center">
            <h2 className="mt-5 text-center text-primary">Display Update Product</h2>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-contnet-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={singleProduct.name} {...register("name")}
                                placeholder="Product Name"
                                className="p-2 m-2 w-90" />
                            <br />
                            <input defaultValue={singleProduct.price}{...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                                className="p-2 m-2 w-90" />
                            <br />
                            <input defaultValue={singleProduct.description} {...register("description", { required: true })}
                                placeholder="description"
                                className="p-2 m-2 w-90" />
                            <br />
                            <input defaultValue={singleProduct.date} {...register("date")}
                                type="Date"
                                className="p-2 m-2 w-90" />
                            <br />
                            <input defaultValue={singleProduct.img} {...register("img", { required: true })}
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
    )

};

export default UpdateProduct;
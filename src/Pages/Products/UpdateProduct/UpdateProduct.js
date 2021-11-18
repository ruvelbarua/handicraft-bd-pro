import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import './UpdateProduct.css';

// DISPLAY UPDATE PRODUCT
const UpdateProduct = () => {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        // Product Update Link
        fetch(`https://dashboard.heroku.com/update/${productId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => reset());
    };
    // Single Product Link
    useEffect(() => {
        fetch(`https://dashboard.heroku.com/singleProduct/${productId}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, []);
    return (

        <div className="update-product my-5">
            <h2 className="fontdesign">PLEASE UPDATE YOUR DATA</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={singleProduct.name} {...register("name", { required: true, maxLength: 18 })} placeholder="Product Name" />
                <input defaultValue={singleProduct.price} {...register("price")} placeholder="Price" />
                <textarea defaultValue={singleProduct.description} {...register("description")} placeholder="Description" />
                <input defaultValue="Made in Bangladesh" {...register("country")} placeholder="Country Name" />
                <input defaultValue={singleProduct.date} {...register("date")}
                    type="Date" />
                <select  {...register("design")}>
                    <option value="premium">Premium</option>
                    <option value="supper">Classic</option>
                    <option value="classic">Normal</option>
                </select>
                <input defaultValue={singleProduct.img} {...register("img")} placeholder="Image Url" />
                <input className="updatebtn" type="submit" />
            </form>
        </div>
    )

};

export default UpdateProduct;
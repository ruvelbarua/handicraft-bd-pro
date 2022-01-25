import React from 'react';
import { useForm } from "react-hook-form";
import "./AddProducts.css";

const AddProducts = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/addproducts', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => console.log(data));
        reset();
    };

    return (
        <div className="input-product my-5">
            <h2 className="fontcolor">PLEASE ADD NEW PRODUCT</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 18 })} placeholder="Product Name" />
                <input {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Description" />
                <input defaultValue="Made in Bangladesh" {...register("country")} placeholder="Country Name" />
                <input {...register("date")}
                    type="Date" />
                <select {...register("design")}>
                    <option value="premium">Premium</option>
                    <option value="supper">Classic</option>
                    <option value="classic">Normal</option>
                </select>
                <input {...register("img")} placeholder="Image Url" />
                <input className="submitbtn" type="Submit" />
            </form>
        </div>
    );
};

export default AddProducts;



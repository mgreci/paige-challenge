'use client';

import { ProductContext } from "@/app/product.context";
import Link from "next/link";
import { useContext, useState } from "react";

import classes from "./page.module.css";
import { IProduct } from "@/app/product.interface";
import { useRouter } from "next/navigation";

export default function ProductDetail({ params: { sku } }: { params: { sku: string } }) {
	const router = useRouter();
	const { searchBySku, update } = useContext(ProductContext);
	const product: IProduct  = searchBySku(sku)!;
	const { name, type, description, color, price } = product;

	const [modifiedProduct, setModifiedProduct] = useState(product);
	const [errors, setErrors]: [string[], Function] = useState([]);

	const handleProductChange = (property: string, value: string|number) => {
		setModifiedProduct({
			...modifiedProduct,
			[property]: value
		})
	};

	const handleUpdate = () => {
		// validate
		const errors = [];

		// price must be >= 0
		const { price, type, description, color } = modifiedProduct;
		if (isNaN(price) || price < 0) {
			errors.push("Price must be a number and greater than zero (0)");
		}
	
		// type, description, color required and max length of 56 chars
		if (!type || type.length === 0 || type.length > 56) {
			errors.push("Type must be set and have maximum length is 56 characters");
		}

		if (!description || description.length === 0 || description.length > 56) {
			errors.push("Description must be set and have maximum length is 56 characters");
		}

		if (!color || color.length === 0 || color.length > 56) {
			errors.push("Color must be set and have maximum length is 56 characters");
		}

		// if any errors, set and exit
		if (errors.length > 0) {
			setErrors(errors);
			return;
		}

		// clear errors
		setErrors([]);

		// update product
		update(product.id, modifiedProduct);

		// redirect to product list page
		router.push('/product-list');
	};

	return (
		<>
			<h1>Product: {sku}</h1>
			<h3><Link href="/product-list">View all products</Link></h3>
			<form className={classes.productDetail}>
				<label className={classes.detailLabel} htmlFor="name">Name</label>
				<input id="name" type="text" defaultValue={name} onChange={event => handleProductChange("name", event.target.value)}/>
				<label className={classes.detailLabel} htmlFor="type">Type</label>
				<input id="type" type="text" defaultValue={type} onChange={event => handleProductChange("type", event.target.value)}/>
				<label className={classes.detailLabel} htmlFor="description">Description</label>
				<input id="description" type="text" defaultValue={description} onChange={event => handleProductChange("description", event.target.value)}/>
				<label className={classes.detailLabel} htmlFor="color">Color</label>
				<input id="color" type="text" defaultValue={color} onChange={event => handleProductChange("color", event.target.value)}/>
				<label className={classes.detailLabel} htmlFor="price">Price</label>
				<input id="price" type="number" step="0.01" defaultValue={price} onChange={event => handleProductChange("price", event.target.value)}/>
			</form>
			<div className={classes.errorMessages}>
				{errors?.map((error, index) => (
					<span key={index} className={classes.error}>{error}</span>
				))}
			</div>
			<button type="button" className={classes.update} onClick={handleUpdate}>Update</button>
		</>
	)
};
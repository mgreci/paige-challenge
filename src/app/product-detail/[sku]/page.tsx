'use client';

import { ProductContext } from "@/app/product.context";
import { useContext } from "react";

import classes from "./page.module.css";
import { IProduct } from "@/app/product.interface";

export default function ProductDetail({ params: { sku } }: { params: { sku: string } }) {
	const { searchBySku } = useContext(ProductContext);
	const product: IProduct  = searchBySku(sku)!;
	const { name, type, description, color, price } = product;

	const handleUpdate = () => {
		// obtain form values
		// validate
		// redirect to product list page
	};

	return (
		<>
			<h1>Product: {sku}</h1>
			<form className={classes.productDetail}>
				<label className={classes.detailLabel} htmlFor="name">Name</label>
				<input id="name" type="text" defaultValue={name} />
				<label className={classes.detailLabel} htmlFor="type">Type</label>
				<input id="type" type="text" defaultValue={type} />
				<label className={classes.detailLabel} htmlFor="description">Description</label>
				<input id="description" type="text" defaultValue={description} />
				<label className={classes.detailLabel} htmlFor="color">Color</label>
				<input id="color" type="text" defaultValue={color} />
				<label className={classes.detailLabel} htmlFor="price">Price</label>
				<input id="price" type="number" step="0.01" defaultValue={price} />
			</form>
			<button type="button" className={classes.update} onClick={handleUpdate}>Update</button>
		</>
	)
};
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
			<h1>Product Detail {sku}</h1>
			<form className={classes.productDetail}>
				<input type="text" defaultValue={name} />
				<input type="text" defaultValue={type} />
				<input type="text" defaultValue={description} />
				<input type="text" defaultValue={color} />
				<input type="number" step="0.01" defaultValue={price} />
				<button type="button" onClick={handleUpdate}>Update</button>
			</form>
		</>
	)
};
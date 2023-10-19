'use client';

import { ProductContext } from "@/app/product.context";
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

	const handleProductChange = (property: string, value: string|number) => {
		setModifiedProduct({
			...modifiedProduct,
			[property]: value
		})
	};

	const handleUpdate = () => {
		// obtain form values

		// validate

		// update product
		update(product.id, modifiedProduct);

		// redirect to product list page
		router.push('/product-list');
	};

	return (
		<>
			<h1>Product: {sku}</h1>
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
			<button type="button" className={classes.update} onClick={handleUpdate}>Update</button>
		</>
	)
};
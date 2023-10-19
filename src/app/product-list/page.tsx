'use client';

import { ProductContext } from "@/app/product.context";
import { useContext } from "react";

export default function ProductList({ }) {
	const { products } = useContext(ProductContext);
	return (
		<>
			<h1>Product List</h1>
			<code>{JSON.stringify(products, null, 2)}</code>
		</>
	)
};
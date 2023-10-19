'use client';

import { ProductContext } from "@/app/product.context";
import { useContext } from "react";

export default function ProductDetail({ params: { sku } }: { params: { sku: string } }) {
	const { products } = useContext(ProductContext);
	return (
		<>
			<h1>Product Detail {sku}</h1>
			<code>{JSON.stringify(products, null, 2)}</code>
		</>
	)
};
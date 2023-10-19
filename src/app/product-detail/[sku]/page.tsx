'use client';

import { ProductContext } from "@/app/product.context";
import { useContext } from "react";

export default function ProductDetail({ params: { sku } }: { params: { sku: string } }) {
	const { searchBySku } = useContext(ProductContext);
	const product = searchBySku(sku);
	return (
		<>
			<h1>Product Detail {sku}</h1>
			<code>{JSON.stringify(product, null, 2)}</code>
		</>
	)
};
'use client';

import { ProductContext } from "@/app/product.context";
import Link from "next/link";
import { useContext } from "react";

export default function ProductList({ }) {
	const { products } = useContext(ProductContext);
	return (
		<>
			<h1>Product List</h1>
			<table>
				<thead>
					<th>Name</th>
					<th>Color</th>
					<th>Type</th>
					<th>Cost</th>
					<th></th>
				</thead>
				<tbody>
					{products?.map(({ name, color, type, price, sku }) => (
						<tr key={sku}>
							<td>{name}</td>
							<td>{color}</td>
							<td>{type}</td>
							<td>{price}</td>
							<td>
								<button type="button">Edit</button>
								<button type="button"><Link href={`/product-detail/${sku}`}>View</Link></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
};
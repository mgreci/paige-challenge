'use client';

import { ProductContext } from "@/app/product.context";
import Link from "next/link";
import { useContext, useState } from "react";
import { IProduct } from "../product.interface";
import classes from './page.module.css';
import FilterByColor from "./FilterByColor";

// NOTE: given product-fixtures.json has two items with the same id.
// no details on what is guaranteed to be unique or not so I will generate key from both id and sku for safety.
const generateProductKey = (id: string, sku: string) => `${id}-${sku}`;

export default function ProductList({ }) {
	const { products }: { products: IProduct[] } = useContext(ProductContext)!;

	return (
		<>
			<h1>Product List</h1>
			<div className={classes.tableWrapper}>
				<FilterByColor />
				<table className={classes.table}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Color</th>
							<th>Type</th>
							<th>Cost</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{products?.map(({ id, name, color, type, price, sku }) => (
							<tr key={generateProductKey(id, sku)}> 
								<td>{name}</td>
								<td>{color}</td>
								<td>{type}</td>
								<td>{price}</td>
								<td>
									<button type="button"><Link href={`/product-detail/${sku}`}>Edit</Link></button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
};
'use client';

import { ProductContext } from "@/app/product.context";
import Link from "next/link";
import { useContext, useState } from "react";
import { IProduct } from "../product.interface";
import classes from './page.module.css';

// NOTE: given product-fixtures.json has two items with the same id.
// no details on what is guaranteed to be unique or not so I will generate key from both id and sku for safety.
const generateProductKey = (id: string, sku: string) => `${id}-${sku}`;

export default function ProductList({ }) {
	const { products, filter }: { products: IProduct[], filter: Function} = useContext(ProductContext)!;
	const [filterByColor, setFilterByColor] = useState("");

	const handleFilterProducts = () => {
		filter(filterByColor);
	};

	const resetFilter = () => {
		setFilterByColor("");
		filter("");
	}

	return (
		<>
			<h1>Product List</h1>
			<div className={classes.filterSection}>
				<label htmlFor="colorFilter">Filter by Color</label>
				<input id="colorFilter" type="text" value={filterByColor} onChange={event => setFilterByColor(event.target.value)} />
				<button type="button" onClick={handleFilterProducts}>Filter</button>
				<button type="button" onClick={resetFilter}>Reset</button>
			</div>
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
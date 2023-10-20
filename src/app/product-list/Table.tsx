import { ProductContext } from "@/app/product.context";
import Link from "next/link";
import { useContext } from "react";
import { IProduct } from "../product.interface";
import classes from './page.module.css';

// NOTE: given product-fixtures.json has two items with the same id.
// no details on what is guaranteed to be unique or not so I will generate key from both id and sku for safety.
const generateProductKey = (id: string, sku: string) => `${id}-${sku}`;

export default function Table() {
	const { products }: { products: IProduct[] } = useContext(ProductContext)!;

	return (
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
							<Link href={`/product-detail/${sku}`}>
								<button type="button">Edit</button>
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
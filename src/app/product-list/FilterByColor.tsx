import { ProductContext } from "@/app/product.context";
import { useContext, useState } from "react";
import classes from './page.module.css';

export default function FilterByColor() {
	const { colorOptions, filter }: { colorOptions: Array<string>, filter: Function} = useContext(ProductContext)!;
	const [filterByColors, setFilterByColors] = useState([]);

	const handleChangeFilterOptions = (color: string, checked: boolean) => {
		if (checked) {
			filterByColors.push(color);
			setFilterByColors([...new Set(filterByColors)]);
		} else {
			let filterByColorsCopy = [...filterByColors];
			const index = filterByColors.findIndex(color);
			if (index > -1) {
				filterByColorsCopy.splice(index, 1);
			}
			setFilterByColors([...new Set(filterByColorsCopy)]);
		}
	};

	const handleFilterProducts = () => {
		filter([...filterByColors]);
	};

	const resetFilter = () => {
		setFilterByColors([]);
		filter([]);
	}

	return (
		<div className={classes.filterSection}>
			<label htmlFor="colorFilter">Filter by Color</label>
			{colorOptions?.map((color) => (
				<input key={color} type="checkbox" defaultChecked={false} onChange={event => handleChangeFilterOptions(color, event.target.value)} />
			))}
			<button type="button" onClick={handleFilterProducts}>Filter</button>
			<button type="button" onClick={resetFilter}>Reset</button>
		</div>
	);
}
import { ProductContext } from "@/app/product.context";
import { useContext, useState } from "react";
import classes from './page.module.css';
import { removeDuplicates } from "@/util";

export default function FilterByColor() {
	const { colorOptions, filter }: { colorOptions: Array<string>, filter: Function} = useContext(ProductContext)!;
	const [filterByColors, setFilterByColors]: [Array<string>, Function] = useState([]);

	const handleChangeFilterOptions = (color: string, checked: boolean) => {
		let updatedFilterByColors;
		if (checked) {
			filterByColors.push(color);
			updatedFilterByColors = removeDuplicates(filterByColors);
		} else {
			let filterByColorsCopy = [...filterByColors];
			const index = filterByColors.findIndex(option => option === color);
			if (index > -1) {
				filterByColorsCopy.splice(index, 1);
			}
			updatedFilterByColors = removeDuplicates(filterByColorsCopy);
		}

		setFilterByColors(updatedFilterByColors);
		filter(updatedFilterByColors);
	};

	const resetFilter = () => {
		setFilterByColors([]);
		filter([]);
	};

	return (
		<div className={classes.filterSection}>
			<label htmlFor="colorFilter">Filter by Color</label>
			{colorOptions?.map((color) => (
				<input key={color} type="checkbox" onChange={event => handleChangeFilterOptions(color, event.target.value)} />
			))}
			<div>
				<button type="button" onClick={resetFilter}>Reset</button>
			</div>
		</div>
	);
}
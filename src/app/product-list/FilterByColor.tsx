import { ProductContext } from "@/product.context";
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
				<div key={color} className={classes.colorFilter}>
					<input id={color} type="checkbox" checked={filterByColors.includes(color)} onChange={event => handleChangeFilterOptions(color, event.target.checked)} />
					<label htmlFor={color} className={classes.colorFilterLabel}>{color}</label>
				</div>
			))}
			<div>
				<button type="button" onClick={resetFilter}>Reset</button>
			</div>
		</div>
	);
}
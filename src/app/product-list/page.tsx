'use client';

import classes from './page.module.css';
import FilterByColor from "./FilterByColor";
import Table from "./Table";

export default function ProductList({ }) {
	return (
		<div className={classes.tableWrapper}>
			<FilterByColor />
			<Table />
		</div>
	)
};
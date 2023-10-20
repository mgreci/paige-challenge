import classes from "./page.module.css";

interface IFormInput {
	property: string,
	label: string,
	type: string,
	value: string|number,
	onUpdate: Function
};

export default function FormInput({ property, label, type, value, onUpdate }: IFormInput) {
	return (
		<>
			<label className={classes.detailLabel} htmlFor={property}>{label}</label>
			<input id={property} type={type} defaultValue={value} {...(type === "number" && { step: 0.01 })} onChange={event => onUpdate(property, event.target.value)}/>
		</>
	);
}
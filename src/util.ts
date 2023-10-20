export function removeDuplicates(list: Array<any>) {
	return [...new Set(list)];
};
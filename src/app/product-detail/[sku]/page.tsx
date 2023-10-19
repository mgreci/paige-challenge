export default function ProductDetail({ params: { sku } }: { params: { sku: string } }) {
	return (
		<h3>Hello, Product Detail {sku}</h3>
	)
};
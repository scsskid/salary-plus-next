export default function RevalidateButton({
	formHandler,
}: {
	formHandler: () => void;
}) {
	return (
		<form action={formHandler}>
			<button type="submit">Try manual revalidate</button>
		</form>
	);
}

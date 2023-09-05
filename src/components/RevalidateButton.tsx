export default function RevalidateButton({
	formHandler,
}: {
	formHandler: () => void;
}) {
	return (
		<form action={formHandler}>
			<button className="ui-btn" type="submit">
				Try manual revalidate
			</button>
		</form>
	);
}

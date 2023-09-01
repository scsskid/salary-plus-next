type Props = {
	id: number;
	handler: (formData: FormData) => Promise<{
		message: string;
	}>;
};

export default function DeleteButton({ id, handler }: Props) {
	return (
		<form action={handler}>
			<input type="hidden" name="id" value={id} />
			<button type="submit">Delete</button>
		</form>
	);
}

'use client';

type Props = {
	id: number;
	handler: (id: number) => Promise<{
		message: string;
	}>;
};

export default function EntryDeleteButton({ id, handler }: Props) {
	return <button onClick={() => handler(id)}>Delete</button>;
}

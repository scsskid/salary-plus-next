import { EditWorkingEntryForm } from '@/components/WorkingEntryForm';

type Props = {
	params: {
		id: string;
	};
};
export default function EntryEditPage({ params: { id } }: Props) {
	return (
		<>
			<h1>Edit Entry {id}</h1>
			<EditWorkingEntryForm id={id} />
		</>
	);
}

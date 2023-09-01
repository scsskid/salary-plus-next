import { EditJobForm } from '@/components/JobForm';

type Props = {
	params: {
		id: string;
	};
};
export default function EntryEditPage({ params: { id } }: Props) {
	return (
		<>
			<h1>Edit Entry {id}</h1>
			<EditJobForm id={parseInt(id)} />
		</>
	);
}

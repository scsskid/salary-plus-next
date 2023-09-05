import { EditWorkingEntryForm } from '@/components/WorkingEntryForm';
import { supabase } from '@/lib/supabaseClient';

type Props = {
	params: {
		id: string;
	};
};
export default async function EntryEditPage({ params: { id } }: Props) {
	return (
		<>
			<h1>Edit Entry {id}</h1>
			<EditWorkingEntryForm id={id} />
		</>
	);
}

export async function generateStaticParams() {
	const { data: ids } = await supabase.from('WorkingEntries').select('id');

	if (!ids) {
		return [];
	}

	return ids.map(({ id }) => {
		return { id: id.toString() };
	});
}

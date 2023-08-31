import { AddWorkingEntryForm } from '@/components/WorkingEntryForm';
import { createWorkingEntry } from '@/lib/actions';

export default async function AddPage() {
	return <AddWorkingEntryForm createWorkingEntry={createWorkingEntry} />;
}

import AddWorkingEntryForm from '@/components/AddWorkingEntryForm';
import { createWorkingEntry } from './actions';

export default async function AddPage() {
	return <AddWorkingEntryForm createWorkingEntry={createWorkingEntry} />;
}

import { CreateJobForm } from '@/components/JobForm';
import JobsList from '@/components/JobsList';

type Props = {};
export default function AccountJobsPage({}: Props) {
	return (
		<>
			<h1>AccountJobsPage</h1>
			<JobsList />
			<CreateJobForm />
		</>
	);
}

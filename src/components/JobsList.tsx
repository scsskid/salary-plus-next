import { getJobs } from '@/lib/dataFetchers';
import { formatWithTwoDecimals } from '@/lib/helpers';
import { deleteJob } from '@/lib/server-actions';
import DeleteButton from './DeleteButton';
import Link from 'next/link';

type Props = {};
export default async function JobsList({}: Props) {
	const userJobs = await getJobs();

	if (!userJobs) {
		return <p>Couldn&apos;t load jobs data.</p>;
	}

	return (
		<>
			{userJobs.length === 0 ? (
				<p>No jobs yet.</p>
			) : (
				<ul>
					{userJobs.map(({ id, title, simple_wage }) => (
						<>
							<li key={id}>
								{title} ({formatWithTwoDecimals(simple_wage)} €/h){' '}
								<Link href={`/account/jobs/${id}`}>Edit</Link>{' '}
								<form action={deleteJob}>
									<DeleteButton id={id} />
								</form>
							</li>
						</>
					))}
				</ul>
			)}
		</>
	);
}

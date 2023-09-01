import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './page.module.css';

import { deleteJob } from '@/lib/server-actions';
import { getWorkingEntries, getJobs } from '@/lib/dataFetchers';
import { formatWithTwoDecimals } from '@/lib/helpers';

import { CreateJobForm } from '@/components/JobForm';
import WorkingEntriesListItem from '@/components/WorkingEntriesListItem';
import DeleteButton from '@/components/DeleteButton';
import { AddWorkingEntryForm } from '@/components/WorkingEntryForm';

export const metadata: Metadata = {
	title: 'Salary Plus Next',
};

export default async function Home() {
	const entries = await getWorkingEntries();
	const userJobs = await getJobs();

	if (!entries) {
		return <p>Couldn&apos;t load entries data.</p>;
	}

	if (!userJobs) {
		return <p>Couldn&apos;t load jobs data.</p>;
	}

	return (
		<main className={`wrap ${styles.main}`}>
			<div className="flow">
				<h2>Me</h2>
				<p>foo</p>

				<section>
					<h2>Jobs</h2>
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
					<CreateJobForm />
				</section>
				<hr />
				<section>
					<h2>WorkingEntries</h2>
					{!entries.length ? (
						<p>No entries yet.</p>
					) : (
						<ul>
							{entries.map((entry) => (
								// @ts-ignore
								<WorkingEntriesListItem key={entry.id} {...entry} />
							))}
						</ul>
					)}

					<AddWorkingEntryForm />
				</section>
			</div>
		</main>
	);
}

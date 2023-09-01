import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './page.module.css';

import { deleteWorkingEntry, deleteJob } from '@/lib/server-actions';
import { getWorkingEntries, getJobs } from '@/lib/dataFetchers';
import DeleteButton from '@/components/DeleteButton';
import { AddWorkingEntryForm } from '@/components/WorkingEntryForm';
import {
	calculateWage,
	formatWithTwoDecimals,
	getDateDifferenceInHouse,
} from '@/lib/helpers';

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
							<li key={id}>
								{title} ({formatWithTwoDecimals(simple_wage)} €/h)
								<DeleteButton id={id} handler={deleteJob} />
							</li>
						))}
					</ul>
				</section>
				<hr />
				<section>
					<h2>WorkingEntries</h2>
					{!entries.length ? (
						<p>No entries yet.</p>
					) : (
						<ul>
							{entries.map(
								({
									begin,
									id,
									end,
									/* @ts-ignore */
									Jobs: { title: jobTitle, simple_wage },
								}) => (
									<li key={id}>
										{id} → {new Date(begin).toLocaleDateString('de')}{' '}
										{new Date(begin).toLocaleTimeString('de')} -{' '}
										{new Date(end).toLocaleTimeString('de')} ({jobTitle})
										<ul>
											<li>
												{getDateDifferenceInHouse(
													new Date(begin),
													new Date(end)
												)}
												h{' '}
											</li>
											<li>
												Claimable Wage:{' '}
												{calculateWage(
													simple_wage,
													new Date(begin),
													new Date(end)
												)}{' '}
												€
											</li>
										</ul>
										<Link href={`/account/entries/${id}`}>Edit</Link>{' '}
										<DeleteButton id={id} handler={deleteWorkingEntry} />
									</li>
								)
							)}
						</ul>
					)}

					<AddWorkingEntryForm />
				</section>
			</div>
		</main>
	);
}

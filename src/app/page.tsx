import type { Metadata } from 'next';
import styles from './page.module.css';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import AddPage from './account/entries/add/page';
import { deleteWorkingEntry, deleteJob } from '@/lib/actions';
import DeleteButton from '@/components/WorkingEntry/DeleteButton';

export const metadata: Metadata = {
	title: 'Salary Plus Next',
};

export default async function Home() {
	const { data: entries } = await supabase.from('WorkingEntries').select(
		`
	id,
	begin,
	end,
	job_id,
	Jobs (
		id,
		title
	)
	`
	);

	const { data: userJobs } = await supabase
		.from('Jobs')
		.select('*')
		.eq('user_id', 1);

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
						{userJobs.map(({ id, title }) => (
							<li key={id}>
								{title} <DeleteButton id={id} handler={deleteJob} />
							</li>
						))}
					</ul>
				</section>
				<hr />
				<section>
					<h2>WorkingEntries</h2>
					<ul>
						{/* @ts-ignore (Jobs.title can't be null) */}
						{entries.map(({ begin, id, end, Jobs: { title: jobTitle } }) => (
							<li key={id}>
								{id} → {new Date(begin).toLocaleDateString('de')}{' '}
								{new Date(begin).toLocaleTimeString('de')} -{' '}
								{new Date(end).toLocaleTimeString('de')} ({jobTitle})
								<Link href={`/account/entries/${id}`}>Edit</Link>{' '}
								<DeleteButton id={id} handler={deleteWorkingEntry} />
							</li>
						))}
					</ul>
				</section>
				<hr />
				<section>
					<h2>Add Working Entry</h2>
					<AddPage />
				</section>
			</div>
		</main>
	);
}

import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import AddPage from './add/page';

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

	console.log(entries);

	if (!entries) {
		return <p>Couldn&apos;t load data.</p>;
	}

	return (
		<main className={`wrap ${styles.main}`}>
			<div className="flow">
				<h2>Me</h2>
				<p>foo</p>
				<p>Entries</p>
				<ul>
					{/* @ts-ignore (Jobs.title can't be null) */}
					{entries.map(({ begin, id, end, Jobs: { title: foo } }) => (
						<li key={id}>
							{id} → {new Date(begin).toLocaleDateString('de')}{' '}
							{new Date(begin).toLocaleTimeString('de')} -{' '}
							{new Date(end).toLocaleTimeString('de')} ({foo})
						</li>
					))}
				</ul>
				<section>
					<AddPage />
				</section>
			</div>
		</main>
	);
}

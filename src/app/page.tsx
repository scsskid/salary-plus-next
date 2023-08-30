import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Salary Plus Next',
};

export default async function Home() {
	const { data: entries } = await supabase.from('WorkingEntries').select('*');

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
					{entries.map(({ begin, id }) => (
						<li key={id}>
							{id} → {new Date(begin).toLocaleTimeString()}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}

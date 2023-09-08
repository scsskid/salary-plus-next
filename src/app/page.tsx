import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Home() {
	const supabase = await createServerComponentClient({ cookies });
	const session = await supabase.auth.getSession();
	const { data } = await supabase.auth.getUser();

	return (
		<div className="flow">
			<pre>{JSON.stringify({ session, data }, null, 2)}</pre>
			<p>
				<Link href="/calendar">Calendar</Link>
			</p>
		</div>
	);
}

import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Home() {
	const session = await supabase.auth.getSession();
	const user = await supabase.auth.getUser();

	console.log({ session, user });

	return (
		<div className="flow">
			<p>
				<Link href="/calendar">Calendar</Link>
			</p>
		</div>
	);
}
